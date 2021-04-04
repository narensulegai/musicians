import React from 'react';
import {Card, CardContent, CardActionArea, CardMedia, Typography} from "@material-ui/core";

function PhotoCard({url, title}) {
    return <Card>
        <CardActionArea>
            <CardMedia component="img" image={url}/>
            <CardContent>
                <Typography variant="caption" color="textSecondary" component="p">
                    {title}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
}

export default function PhotoGrid() {

    const imgs = [
        {
            url: "https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1575320254728-GQHP4UXC2IO54LYBNVII/ke17ZwdGBToddI8pDm48kLRNNcIENFxEQKOcxbrZRTNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw2_ddoymeMlxjI-JY2suQEg5oVW6Qs4UuFZSc--2I-0maYxsjBED98syUv6GM21aw/IMG_0482.jpg?format=1500w",
            title: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."
        },
        {
            url: "https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1575320286814-PG4SSTWE4FQ272DII31Q/ke17ZwdGBToddI8pDm48kIcwviLnEcF2I5MiI-cikGtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwMfNtGUS2wWKnAGfusYLnuFoG6fg7tpm7eDnFbP8zWpi-JsHi0BkBwlZFnnSfw_kE/IMG_0524.jpg?format=1500w",
            title: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        },
        {
            url: "https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1567200857725-JNPDJOK8F1TPHFKWONA1/ke17ZwdGBToddI8pDm48kCiC6x0kNpxliGpzQTkOLNUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2ppk8fIk4OUdzzAJ58dNz9ksAnbOUWC6fgQEHg0Bz14hkOpdljO7Z-5qh0zg85Jnj/IMG_0380.JPG?format=2500w",
            title: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        },
        {
            url: "https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1549785681779-VF4JL2I1M1LIJ4NNKF71/ke17ZwdGBToddI8pDm48kMxK4jb5atwl-Ch57d_i0S17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UT4_iezYwcOSAaJCa4Nr1wJMCuvlZpg9tnEBBJrWBe6YxpYlHvZJemZOLQaDCmG4NQ/DSC_0723-2.jpg?format=2500w",
            title: "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

        },
        {
            url: "https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1549785589132-WQ5DRQU9MV3ESAGXF31E/ke17ZwdGBToddI8pDm48kMxK4jb5atwl-Ch57d_i0S17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UT4_iezYwcOSAaJCa4Nr1wJMCuvlZpg9tnEBBJrWBe6YxpYlHvZJemZOLQaDCmG4NQ/43512648160_6576b2d778_o-4.jpg?format=2500w",
            title: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham."
        }
    ];

    return (
        <div className="photo-grid">
            {imgs.map((i) => {
                return <PhotoCard key={i.url} url={i.url} title={i.title}/>
            })}
        </div>
    );
}