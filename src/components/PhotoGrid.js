import React from 'react';

export default function PhotoGrid() {

    const imgs = [
        "https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1575320254728-GQHP4UXC2IO54LYBNVII/ke17ZwdGBToddI8pDm48kLRNNcIENFxEQKOcxbrZRTNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpw2_ddoymeMlxjI-JY2suQEg5oVW6Qs4UuFZSc--2I-0maYxsjBED98syUv6GM21aw/IMG_0482.jpg?format=1500w",
        "https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1575320286814-PG4SSTWE4FQ272DII31Q/ke17ZwdGBToddI8pDm48kIcwviLnEcF2I5MiI-cikGtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwMfNtGUS2wWKnAGfusYLnuFoG6fg7tpm7eDnFbP8zWpi-JsHi0BkBwlZFnnSfw_kE/IMG_0524.jpg?format=1500w",
        "https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1567200857725-JNPDJOK8F1TPHFKWONA1/ke17ZwdGBToddI8pDm48kCiC6x0kNpxliGpzQTkOLNUUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8PaoYXhp6HxIwZIk7-Mi3Tsic-L2IOPH3Dwrhl-Ne3Z2ppk8fIk4OUdzzAJ58dNz9ksAnbOUWC6fgQEHg0Bz14hkOpdljO7Z-5qh0zg85Jnj/IMG_0380.JPG?format=2500w",
        "https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1549785681779-VF4JL2I1M1LIJ4NNKF71/ke17ZwdGBToddI8pDm48kMxK4jb5atwl-Ch57d_i0S17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UT4_iezYwcOSAaJCa4Nr1wJMCuvlZpg9tnEBBJrWBe6YxpYlHvZJemZOLQaDCmG4NQ/DSC_0723-2.jpg?format=2500w",
        "https://images.squarespace-cdn.com/content/v1/57f0499ed1758e2d78db7dbe/1549785589132-WQ5DRQU9MV3ESAGXF31E/ke17ZwdGBToddI8pDm48kMxK4jb5atwl-Ch57d_i0S17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UT4_iezYwcOSAaJCa4Nr1wJMCuvlZpg9tnEBBJrWBe6YxpYlHvZJemZOLQaDCmG4NQ/43512648160_6576b2d778_o-4.jpg?format=2500w"
    ];

    return (
        <div className="photo-grid">
            {imgs.map((i) => {
                return <img key={i} src={i}/>
            })}
        </div>
    );
}