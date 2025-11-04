import React from "react";
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

const FeatureCard = ({title, description, icon: Icon} : {title: string, description: string, icon: React.ComponentType<{className?: string}>}) => (
    <Card className="border-2 hover:border-primary transition-colors">
        <CardHeader>
            <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>{title}</CardTitle>
            <CardDescription>
                {description}
            </CardDescription>
        </CardHeader>
    </Card>
)

export default FeatureCard;