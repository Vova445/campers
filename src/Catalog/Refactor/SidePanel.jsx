import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { searchFormStyles,sidePanelStyles, sidePanelItemStyles, hr,locationInput, locationLabel, iconStyle, locationInputContainer, suggestionsList, suggestionItem, filters, topContainer, equipmentItem, vehicleEquipmentBox, subtitleFilter,  button } from "../styles";
import { ReactComponent as DisabledLocation } from "../../svg/DisabledLocationIcon.svg";
import { ReactComponent as AC } from "../../svg/AC.svg";
import { ReactComponent as Automatic } from "../../svg/Automatic.svg";
import { ReactComponent as Kitchen } from "../../svg/Kitchen.svg";
import { ReactComponent as TV } from "../../svg/TV.svg";
import { ReactComponent as Shower } from "../../svg/Shower.svg";
import { ReactComponent as Van } from "../../svg/Van.svg";
import { ReactComponent as FullyIntegrated } from "../../svg/FullyIntegrated.svg";
import { ReactComponent as Alcove } from "../../svg/Alcove.svg";
import { ReactComponent as EnabledLocation } from "../../svg/EnabledLocationIcon.svg";

const SidePanel = ({ locations }) => {
    const [selectedLocation, setSelectedLocation] = useState("");
    const [isInputActive, setIsInputActive] = useState(false);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedEquipment, setSelectedEquipment] = useState("");
    const [selectedType, setSelectedType] = useState("");

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    const handleInputFocus = () => {
        setIsInputActive(true);
        setShowSuggestions(true);
    };

    const handleInputBlur = () => {
        setIsInputActive(false);
        setShowSuggestions(false);
    };

    const handleSuggestionClick = (location) => {
        setSelectedLocation(location);
        setShowSuggestions(false);
    };

    const handleEquipmentClick = (equipment) => {
        setSelectedEquipment(equipment);
    };

    const handleTypeClick = (type) => {
        setSelectedType(type);
    };

    return (
        <div css={searchFormStyles} className="search-form">
            <div css={sidePanelStyles}>
                <div css={topContainer}>
                    <label htmlFor="location" css={locationLabel}>
                        Location:
                    </label>
                    <div css={locationInputContainer} className={isInputActive ? "active" : ""}>
                        {selectedLocation ? (
                            <EnabledLocation css={iconStyle} />
                        ) : (
                            <DisabledLocation css={iconStyle} />
                        )}
                        <input
                            id="location"
                            type="text"
                            value={selectedLocation}
                            onChange={handleLocationChange}
                            onFocus={handleInputFocus}
                            onBlur={handleInputBlur}
                            placeholder="City"
                            css={locationInput}
                            autoComplete="off"
                        />

                        {showSuggestions && (
                            <ul css={suggestionsList}>
                                {locations.map((location, index) => (
                                    <li
                                        key={index}
                                        css={suggestionItem}
                                        onClick={() => handleSuggestionClick(location)}
                                    >
                                        {location}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
      <p css={filters}>Filters</p>
      <div css={sidePanelItemStyles}>
        <p css={subtitleFilter}>Vehicle Equipment:</p>
        <hr css={hr} />
        <div css={vehicleEquipmentBox}>
          <button
            type="button"
            css={[
              equipmentItem,
              selectedEquipment === "AC" && {
                border: "1px solid rgb(228, 72, 72)",
              },
            ]}
            onClick={() => handleEquipmentClick("AC")}
          >
            <AC />
            AC
          </button>
          <button
            type="button"
            css={[
              equipmentItem,
              selectedEquipment === "Automatic" && {
                border: "1px solid rgb(228, 72, 72)",
              },
            ]}
            onClick={() => handleEquipmentClick("Automatic")}
          >
            <Automatic />
            Automatic
          </button>
          <button
            type="button"
            css={[
              equipmentItem,
              selectedEquipment === "Kitchen" && {
                border: "1px solid rgb(228, 72, 72)",
              },
            ]}
            onClick={() => handleEquipmentClick("Kitchen")}
          >
            <Kitchen />
            Kitchen
          </button>
          <button
            type="button"
            css={[
              equipmentItem,
              selectedEquipment === "TV" && {
                border: "1px solid rgb(228, 72, 72)",
              },
            ]}
            onClick={() => handleEquipmentClick("TV")}
          >
            <TV />
            TV
          </button>
          <button
            type="button"
            css={[
              equipmentItem,
              selectedEquipment === "Shower" && {
                border: "1px solid rgb(228, 72, 72)",
              },
            ]}
            onClick={() => handleEquipmentClick("Shower")}
          >
            <Shower />
            Shower/WC
          </button>
        </div>
      </div>
      <div css={sidePanelItemStyles}>
        <p css={subtitleFilter}>Vehicle Type:</p>
        <hr css={hr} />
        <div css={vehicleEquipmentBox}>
          <button
            type="button"
            css={[
              equipmentItem,
              selectedType === "Van" && {
                border: "1px solid rgb(228, 72, 72)",
              },
            ]}
            onClick={() => handleTypeClick("Van")}
          >
            <Van />
            Van
          </button>
          <button
            type="button"
            css={[
              equipmentItem,
              selectedType === "Fully Integrated" && {
                border: "1px solid rgb(228, 72, 72)",
              },
            ]}
            onClick={() => handleTypeClick("Fully Integrated")}
          >
            <FullyIntegrated />
            Fully Integrated
          </button>
          <button
            type="button"
            css={[
              equipmentItem,
              selectedType === "Alcove" && {
                border: "1px solid rgb(228, 72, 72)",
              },
            ]}
            onClick={() => handleTypeClick("Alcove")}
          >
            <Alcove />
            Alcove
          </button>
        </div>
      </div>
    </div>
    <button css={button}>Search</button>
  </div>
  );
};

export default SidePanel;
