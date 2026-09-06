import { PageContainer } from "@/components/layout/site-chrome";
import { ModelsCatalog } from "@/components/models/models-catalog";
import { cars } from "@/data/cars";

export default function HomePage() {
  return (
    <PageContainer>
      <ModelsCatalog cars={cars} />
    </PageContainer>
  );
}
