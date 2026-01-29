import {Card, CardActionArea, CardContent, Typography} from "@mui/material";
import type {ReactNode} from "react";

type LinkCardProps = {
    link: string;
    title: string;
    icon: ReactNode;
}

function LinkCard({link, title, icon}: LinkCardProps) {
    return <Card
        sx={{
            display: "inline-flex",
            width: "fit-content",
            p: 0,
            overflow: "visible",
        }}
    >
        <CardActionArea component="a" href={link} sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 3,
            gap: 1
        }}>
            {icon}
            <CardContent>
                <Typography gutterBottom variant="h5">
                    {title}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>;
}

export default LinkCard;
