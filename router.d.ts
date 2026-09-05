import "react-router";

// Activating v8 engine middleware
declare module "react-router" {
    interface Future {
        v8_middleware: true;
    }
}