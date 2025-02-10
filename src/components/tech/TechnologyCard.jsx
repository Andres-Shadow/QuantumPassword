import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export const TechnologyCard = ({ name, description }) => (
  <Card>
    <CardContent className="p-4">
      <h3 className="font-semibold mb-1">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </CardContent>
  </Card>
);
