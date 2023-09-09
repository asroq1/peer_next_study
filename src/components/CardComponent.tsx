"use client";

import { Card } from "@mui/material";

const CardComponent = ({ children }: { children: React.ReactNode }) => {
  const isClient = typeof window === "object";
  console.log("Card isClient", isClient);

  return (
    <Card
      sx={{
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        width: "470px",
        padding: "20px 30px",
        marginBottom: "40px",
        backgroundColor: "#e6eeff",
      }}
    >
      {children}
    </Card>
  );
};

export default CardComponent;
