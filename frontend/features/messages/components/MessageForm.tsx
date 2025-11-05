"use client";

import React from "react";
import {Send} from "lucide-react";
import {Textarea} from "@/components/ui/textarea";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button";
import {useAddMessageMutation} from "@/features/messages/api/messagesApi";
import useFormHandler from "@/hooks/useFormHandler";


export const MessageForm = () => {
    const [addMessage, {isLoading}] = useAddMessageMutation();
    const {content, setContent, error, handleSubmit} = useFormHandler();


    const handleFormSubmit = handleSubmit({
        data: {content},
        mutation: addMessage,
        successMessage: {
            title: "Sukces!",
            description: "Wiadomość została dodana pomyślnie",
        },
        errorMessage: {
            title: "Błąd",
            description: "Nie udało się dodać wiadomości:",
        },
    });

    return (
        <form className="space-y-4" onSubmit={handleFormSubmit}>
            <div className="space-y-2">
                <Label htmlFor="message-content">Treść wiadomości</Label>
                <Textarea
                    id="message-content"
                    placeholder="Wprowadź treść wiadomości..."
                    maxLength={255}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    className={`min-h-[120px] resize-none ${
                        error ? "border-destructive" : ""
                    }`}
                />
                {error && <p className="text-sm text-destructive">{error}</p>}
                <p className="text-xs text-muted-foreground">
                    {content.length}/255 znaków
                </p>
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                <Send className="mr-2 h-4 w-4"/>
                {isLoading ? "Wysyłanie..." : "Wyślij"}
            </Button>
        </form>
    );
};