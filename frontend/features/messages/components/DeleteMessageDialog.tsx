import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from "@/components/ui/alert-dialog";
import {Button} from "@/components/ui/button";
import {Trash2} from "lucide-react";
import {useDeleteMessageMutation} from "@/features/messages/api/messagesApi";

const DeleteMessageDialog = ({id}: { id: number }) => {
    const [deleteMessage, {isLoading: isDeleting}] = useDeleteMessageMutation();

    return (<AlertDialog>
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
                    onClick={() => deleteMessage({id})}
                    disabled={isDeleting}
                    className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                    {isDeleting ? "Usuwanie…" : "Usuń"}
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>)
}
export default DeleteMessageDialog