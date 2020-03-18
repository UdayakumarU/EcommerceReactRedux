import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item/menu-item.component";
import {selectDirectorySections} from "../../redux/directory/directory.selector";

import "./directory.styles.scss";

const Directory =({sections}) =>(
      <div className="directory-menu">
        {sections.map(({ id, imageUrl, title ,size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}/>
        ))}
      </div>
    );

const mapStateToProps = createStructuredSelector({
  sections : selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
