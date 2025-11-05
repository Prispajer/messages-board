"use client";

import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";
import {Pencil, Save} from "lucide-react";
import {useUpdateMessageMutation} from "@/features/messages/api/messagesApi";
import useFormHandler from "@/hooks/useFormHandler";

export const EditMessageDialog = ({
                                      id,
                                      initialContent
                                  }: {
    id: number;
    initialContent: string;
}) => {
    const [open, setOpen] = React.useState(false);

    const [updateMessage, {isLoading}] = useUpdateMessageMutation();
    const {content, setContent, error, handleSubmit} = useFormHandler(initialContent);

    React.useEffect(() => {
        setContent(initialContent);
    }, [initialContent, setContent]);

    const handleFormSubmit = handleSubmit({
        data: {id, content},
        mutation: updateMessage,
        successMessage: {
            title: "Sukces!",
            description: "Wiadomość została zaktualizowana pomyślnie",
        },
        errorMessage: {
            title: "Błąd",
            description: "Nie udało się zaktualizować wiadomości:",
        },
        onSuccess: setOpen,
        resetOnSuccess: false,
    });

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-accent hover:text-accent-foreground"
                >
                    <Pencil className="h-4 w-4"/>
                </Button>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Edytuj wiadomość</DialogTitle>
                    <DialogDescription>
                        Wprowadź zmiany w treści wiadomości #{id}
                    </DialogDescription>
                </DialogHeader>

                <form className="space-y-4 pt-4" onSubmit={handleFormSubmit}>
                    <div className="space-y-2">
                        <Label htmlFor="edit-message-content">Treść wiadomości</Label>
                        <Textarea
                            id="edit-message-content"
                            value={content}
                            maxLength={255}
                            onChange={(e) => setContent(e.target.value)}
                            className={`min-h-[150px] resize-none ${
                                error ? "border-destructive" : ""
                            }`}
                        />
                        {error && <p className="text-sm text-destructive">{error}</p>}
                        <p className="text-xs text-muted-foreground">
                            {content.length}/255 znaków
                        </p>
                    </div>

                    <div className="flex justify-end gap-3">
                        <Button type="button" variant="outline" onClick={() => setOpen(false)} disabled={isLoading}>
                            Anuluj
                        </Button>
                        <Button type="submit" disabled={isLoading}>
                            <Save className="mr-2 h-4 w-4"/>
                            {isLoading ? "Zapisywanie..." : "Zapisz zmiany"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};