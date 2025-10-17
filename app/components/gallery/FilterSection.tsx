"use client";

export default function FilterSection() {
  return (
    <div className="site-filters clearfix center m-b40">
      <ul className="filters" data-toggle="buttons">
        <li data-filter="" className="btn active">
          <input type="radio" />
          <a href="javascript:void(0);" className="site-button-secondry">
            <span>Show All</span>
          </a>
        </li>

        <li data-filter="water-sports" className="btn">
          <input type="radio" />
          <a href="javascript:void(0);" className="site-button-secondry">
            <span>Academy</span>
          </a>
        </li>

        <li data-filter="jumping" className="btn">
          <input type="radio" />
          <a href="javascript:void(0);" className="site-button-secondry">
            <span>Shooters</span>
          </a>
        </li>

        <li data-filter="bikes" className="btn">
          <input type="radio" />
          <a href="javascript:void(0);" className="site-button-secondry">
            <span>Achievers</span>
          </a>
        </li>

        <li data-filter="soccer" className="btn">
          <input type="radio" />
          <a href="javascript:void(0);" className="site-button-secondry">
            <span>Staff</span>
          </a>
        </li>
      </ul>
    </div>
  );
}
