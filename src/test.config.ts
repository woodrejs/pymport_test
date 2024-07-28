import failOnConsole from "jest-fail-on-console";

failOnConsole({
    shouldFailOnError: true,
    shouldFailOnWarn: true,
    shouldFailOnLog: true,

    shouldFailOnAssert: false,
    shouldFailOnDebug: false,
    shouldFailOnInfo: false,
});
