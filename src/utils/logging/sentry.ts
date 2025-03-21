import type { Breadcrumb } from "@sentry/core";

enum NodeLogColor {
  FgYellow = "\x1b[33m",
  FgRed = "\x1b[31m",
  Reset = "\x1b[0m",
}

type SentryInput = string | Error;

interface Event {
  breadcrumb?: {
    category: string;
    data?: {
      [key: string]: string | object | number;
    };
    message: string;
  };
  error?: SentryInput;
  info?: string;
}

const loadSentryAndCaptureException = async (error: SentryInput) => {
  console.log(`${NodeLogColor.FgRed}`, error);

  const Sentry = await import("@sentry/react");

  Sentry.captureException(error);
};

const loadSentryAndCaptureBreadCrumb = async (breadcrumb: Breadcrumb) => {
  const Sentry = await import("@sentry/react");

  Sentry.addBreadcrumb(breadcrumb);
};

const log = (event: Event) => {
  if (event?.breadcrumb) loadSentryAndCaptureBreadCrumb(event.breadcrumb);
  else if (event?.error) loadSentryAndCaptureException(event.error);
  else if (event?.info) {
    console.warn(`${NodeLogColor.FgYellow}%s${NodeLogColor.Reset}`, event.info);
  }
};

export default log;
