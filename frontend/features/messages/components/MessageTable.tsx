"use client";

import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";
import {EditMessageDialog} from "@/features/messages/components/EditMessageDialog";
import {useGetMessagesQuery} from "@/features/messages/api/messagesApi";
import type {Message} from "../types/message";
import DeleteMessageDialog from "@/features/messages/components/DeleteMessageDialog";

export const MessageTable = () => {
    const {data: messages, isLoading, isError} = useGetMessagesQuery();

    if (isLoading) {
        return <p>Ładowanie wiadomości…</p>;
    }

    if (isError) {
        return <p>Nie udało się pobrać wiadomości.</p>;
    }

    if (!messages || messages.length === 0) {
        return (
            <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                    Brak wiadomości do wyświetlenia
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                    Dodaj pierwszą wiadomość używając formularza
                </p>
            </div>
        );
    }

    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[80px]">ID</TableHead>
                        <TableHead>Wiadomość</TableHead>
                        <TableHead className="w-[140px] text-right">Akcje</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {messages.map((msg: Message) => (
                        <TableRow key={msg.id} className="min-h-[56px]">
                            <TableCell className="font-medium">{msg.id}</TableCell>
                            <TableCell className="max-w-md break-words whitespace-pre-wrap">
                                {msg.content}
                            </TableCell>
                            <TableCell className="w-[140px]">
                                <div className="flex justify-center items-center gap-2">
                                    <EditMessageDialog
                                        id={msg.id}
                                        initialContent={msg.content}
                                    />
                                    <DeleteMessageDialog id={msg.id}/>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};