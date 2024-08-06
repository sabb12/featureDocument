"use strict";

import Slider from "./component/Slider";
import ResponsiveWebsite from "./component/ResponsiveWebsite";
import Pagination1 from "./component/Pagination1";
import RichTextEditor from "./component/RichTextEditor";
import UploadSingleImage from "./component/UploadSingleImage";

function App() {
  return (
    <div className="App">
      {/* <Slider />
      <ResponsiveWebsite />
      <Pagination1 /> */}
      <UploadSingleImage />
      {/* <RichTextEditor /> */}
    </div>
  );
}

export default App;
