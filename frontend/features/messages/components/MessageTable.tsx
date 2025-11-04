"use client";

import {Button} from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow,} from "@/components/ui/table";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {Pencil, Trash2} from "lucide-react";
import {useGetMessagesQuery} from "@/features/messages/api/messagesApi";

export const MessageTable = () => {
    const {data: messages, isLoading, isError, error} = useGetMessagesQuery();

    if (isLoading) return <p>Ładowanie…</p>;
    if (isError) return <p>Błąd: {JSON.stringify(error)}</p>;

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
                    {messages.map((msg: { id: number; content: string }) => (
                        <TableRow key={msg.id}>
                            <TableCell className="font-medium">{msg.id}</TableCell>
                            <TableCell className="max-w-md">
                                <p className="line-clamp-2">{msg.content}</p>
                            </TableCell>
                            <TableCell>
                                <div className="flex justify-end gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="hover:bg-accent hover:text-accent-foreground"
                                    >
                                        <Pencil className="h-4 w-4"/>
                                    </Button>

                                    <AlertDialog>
                                        <AlertDialogTrigger asChild>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="hover:bg-destructive hover:text-destructive-foreground"
                                            >
                                                <Trash2 className="h-4 w-4"/>
                                            </Button>
                                        </AlertDialogTrigger>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>
                                                    Czy na pewno chcesz usunąć?
                                                </AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Ta akcja jest nieodwracalna. Wiadomość zostanie
                                                    trwale usunięta z systemu.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <AlertDialogCancel>Anuluj</AlertDialogCancel>
                                                <AlertDialogAction
                                                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                                                    Usuń
                                                </AlertDialogAction>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};