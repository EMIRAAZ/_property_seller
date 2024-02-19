import React from "react";
import PropertyListingCard from "../../components/propertyListingCard/PropertyListingCard";
import AdsBanner from "../../components/adsBanner/AdsBanner";
import Header from "../../components/newHeader";
import SearchHeader from "../../components/searchHeader/SearchHeader";

function AllProperties() {
  return (
    <div>
      <Header />

      <SearchHeader />

      <h1 className="text-center text-[40px] font-medium my-6">All Properties</h1>
      <div className="flex justify-center gap-4 mt-11 mb-4">
        <PropertyListingCard />
        <AdsBanner />
      </div>
    </div>
  );
}

export default AllProperties;
