import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {MessageForm} from "@/features/messages/components/MessageForm";
import {MessageTable} from "@/features/messages/components/MessageTable";
import {Separator} from "@/components/ui/separator";

export default function MessagesPage() {
    return (
        <div className="min-h-screen bg-background">
            <div className="container mx-auto py-20 px-4 max-w-7xl">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-foreground mb-2">Zarządzanie Wiadomościami</h1>
                    <p className="text-muted-foreground text-lg">
                        Dodawaj, edytuj i usuwaj wiadomości w systemie
                    </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-1">
                        <Card className="shadow-md">
                            <CardHeader>
                                <CardTitle>Nowa Wiadomość</CardTitle>
                                <CardDescription>
                                    Wprowadź treść nowej wiadomości
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <MessageForm/>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="lg:col-span-2">
                        <Card className="shadow-md">
                            <CardHeader>
                                <CardTitle>Lista Wiadomości</CardTitle>
                            </CardHeader>
                            <Separator/>
                            <CardContent className="pt-6 overflow-y-auto max-h-[800px]">
                                <MessageTable/>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}