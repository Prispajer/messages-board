import React from "react";
import validateMessage from "@/utils/validateMessage";
import {toast} from "@/hooks/use-toast";

type SubmitOptions<TArgs extends { content: string }> = {
    data: TArgs;
    mutation: (args: TArgs) => Promise<unknown>;
    successMessage: { title: string; description: string };
    errorMessage: { title: string; description: string };
    onSuccess?: React.Dispatch<React.SetStateAction<boolean>>;
    resetOnSuccess?: boolean;
};

export default function useFormHandler(initialContent = "") {
    const [content, setContent] = React.useState(initialContent);
    const [error, setError] = React.useState("");

    const handleSubmit =
        <TArgs extends { content: string }>({
                                                data,
                                                mutation,
                                                successMessage,
                                                errorMessage,
                                                onSuccess,
                                                resetOnSuccess = true,
                                            }: SubmitOptions<TArgs>) =>
            async (e: React.FormEvent) => {
                e.preventDefault();

                const validate = validateMessage(data.content);
                setError(validate ?? "");
                if (validate) return;

                try {
                    await mutation(data);
                    if (resetOnSuccess) setContent("");
                    toast(successMessage);
                    if (onSuccess) onSuccess(false);
                } catch (err) {
                    const message = (err as Error)?.message ?? String(err);
                    toast({
                        ...errorMessage,
                        description: `${errorMessage.description} ${message}`,
                        variant: "destructive",
                    });
                }
            };

    return {content, setContent, error, setError, handleSubmit};
}