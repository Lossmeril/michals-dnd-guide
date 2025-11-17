import Card from "@/components/card";
import { D20 } from "@/components/dice";

const DangerLevelPage = () => {
  return (
    <div className="w-full h-full grid place-items-center max-w-64 mx-auto">
      <Card>
        <div className="text-center">
          <h2 className="font-bold text-3xl mb-5">Error 404</h2>
          <p className="mb-3">
            A <strong>natural 1</strong> was rolled and this page does not
            exist.
          </p>
          <D20 display={1} />
        </div>
      </Card>
    </div>
  );
};

export default DangerLevelPage;
