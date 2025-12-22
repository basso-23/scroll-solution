export default function Home() {
  return (
    <div className="main_container">
      <div className="display_left_container">
        <div className="display_products_section">
          <div
            className="ad_left banner_image"
            style={{ backgroundImage: "url('/vertical_banner.png')" }}
          ></div>

          {/* Contenedor scrollable que ocupa el espacio restante */}
          <div className="display_products_content">
            <div className="table_headers">PRODUCTO</div>
            <div className="scrollable_container">
              <div className="scrollable_item">Item 1</div>
              <div className="scrollable_item">Item 2</div>
              <div className="scrollable_item">Item 3</div>
              <div className="scrollable_item">Item 4</div>
              <div className="scrollable_item">Item 5</div>
              <div className="scrollable_item">Item 6</div>
              <div className="scrollable_item">Item 7</div>
              <div className="scrollable_item">Item 8</div>
              <div className="scrollable_item">Item 9</div>
              <div className="scrollable_item">Item 10</div>
              <div className="scrollable_item">Item 11</div>
              <div className="scrollable_item">Item 12</div>
              <div className="scrollable_item">Item 13</div>
              <div className="scrollable_item">Item 14</div>
              <div className="scrollable_item">Item 15</div>
              <div className="scrollable_item">Item 16</div>
              <div className="scrollable_item">Item 17</div>
              <div className="scrollable_item">Item 18</div>
              <div className="scrollable_item">Item 19</div>
              <div className="scrollable_item">Item 20</div>
            </div>
          </div>
        </div>
        <div
          className="ad_bottom banner_image"
          style={{ backgroundImage: "url('/horizontal_banner.png')" }}
        ></div>
      </div>
      <div className="display_right_container">
        <div className="display_logo_container">
          <div
            className="display_logo logo_image"
            style={{ backgroundImage: "url('/piopio.png')" }}
          ></div>
        </div>
        <div className="display_summary_container">
          <div className="display_summary">SUMMARY</div>
        </div>
      </div>
    </div>
  );
}
