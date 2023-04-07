import ColorPalette from "./components/ColorPalette";
import Typography from "./components/Typography";
import Buttons from "./components/Buttons";

const App = () => {
  return (
    <div>
      <h1 className="p-5 text-center text-2xl uppercase text-[#BDBDBD]">
        style guide
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <section>
          <div className="border-b-2 border-[#BDBDBD] p-4">
            <h2 className="text-2xl font-medium text-[#BDBDBD]">
              color palette
            </h2>
          </div>
          <ColorPalette />
        </section>

        <section>
          <div className="border-b-2 border-[#BDBDBD] p-4">
            <h2 className="text-2xl font-medium text-[#BDBDBD]">typography</h2>
          </div>
          <Typography />
        </section>
        <section>
          <div className="border-b-2 border-[#BDBDBD] p-4">
            <h2 className="text-2xl font-medium text-[#BDBDBD]">buttons</h2>
          </div>
          <Buttons />
        </section>
      </div>
    </div>
  );
};

export default App;
