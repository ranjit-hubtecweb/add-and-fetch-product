import { useState } from "react";
import { Card, TextContainer, Text } from "@shopify/polaris";
import { Toast } from "@shopify/app-bridge-react";
import { useTranslation } from "react-i18next";
import { useAppQuery, useAuthenticatedFetch } from "../hooks";

export  function FetchProduct() {
  const emptyToastProps = { content: null };
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState([]);
  const [toastProps, setToastProps] = useState(emptyToastProps);
  const fetch = useAuthenticatedFetch();
  const { t } = useTranslation();

  const handleFetchProduct = async () => {
    setIsLoading(true);
    const response = await fetch("/api/products");
    setIsLoading(false);

    if (response.ok) {
      const data = await response.json();
      console.log("Product data:", data.body.data.products.edges);
      setProduct(data.body.data.products.edges);
    } else {
      console.log("Failed to fetch products:", response.status);
    }
  };

  return (
    <>
    <Card  title={"Fetch Product"}
    sectioned
    primaryFooterAction={{
      content: t("Fetch Product124"),
      onAction: handleFetchProduct,
      loading: isLoading,
    }}>
    <TextContainer spacing="loose">
      <p>{product.length}</p>
    </TextContainer>
    
    </Card>
    
    
    </>
  )
}
