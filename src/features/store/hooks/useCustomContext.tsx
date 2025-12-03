import { useContext } from "react";
import type { Context } from "react";

export default function useCustomContext<T>(context: Context<T | undefined>, errorMessage: string): T {
    const thisContext = useContext(context);

    if (thisContext === undefined || thisContext === null) {
        throw new Error(errorMessage);
    }
    return thisContext;
}