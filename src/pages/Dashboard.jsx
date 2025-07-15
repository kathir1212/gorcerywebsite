import React from "react";
export const Dashboard = () => {

    const products = [
        { name: "Nike Pegasus 41 shoes", category: "Shoes", offerPrice: 999, inStock: true, image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage.png", },
        { name: "Nike Pegasus 41 shoes", category: "Shoes", offerPrice: 999, inStock: false, image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage2.png", },
        { name: "Nike Pegasus 41 shoes", category: "Shoes", offerPrice: 999, inStock: true, image: "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/card/productImage3.png", },
    ];

    return (
        <div className="flex-1 py-10 flex flex-col justify-between">
            <div className="w-full md:p-10 p-4">
                <h2 className="pb-4 text-lg font-medium">Dashborad</h2>
               
            </div>
        </div>
    );
};