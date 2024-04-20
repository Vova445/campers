import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import {
  sidePanelStyles,
  sidePanelItemStyles,
  hr,
  locationInput,
  locationLabel,
  iconStyle,
  locationInputContainer,
  filters,
  topContainer,
  equipmentItem,
  vehicleEquipmentBox,
  subtitleFilter,
  button,
  customSelectStyles
} from '../styles';
import { ReactComponent as DisabledLocation } from '../../svg/DisabledLocationIcon.svg';
import { ReactComponent as AC } from '../../svg/AC.svg';
import { ReactComponent as Automatic } from '../../svg/Automatic.svg';
import { ReactComponent as Kitchen } from '../../svg/Kitchen.svg';
import { ReactComponent as TV } from '../../svg/TV.svg';
import { ReactComponent as Shower } from '../../svg/Shower.svg';
import { ReactComponent as Van } from '../../svg/Van.svg';
import { ReactComponent as FullyIntegrated } from '../../svg/FullyIntegrated.svg';
import { ReactComponent as Alcove } from '../../svg/Alcove.svg';
import { ReactComponent as EnabledLocation } from '../../svg/EnabledLocationIcon.svg';

const SidePanel = ({ locations }) => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState([]);
  const [selectedType, setSelectedType] = useState('');

  const uniqueCountries = Array.from(new Set(locations.map(location => location.split(',')[1].trim())));

  const handleLocationChange = event => {
    setSelectedLocation(event.target.value);
  };

  const handleEquipmentClick = equipment => {
    const index = selectedEquipment.indexOf(equipment);
    if (index === -1) {
      setSelectedEquipment([...selectedEquipment, equipment]);
    } else {
      setSelectedEquipment(selectedEquipment.filter(item => item !== equipment));
    }
  };

  const handleTypeClick = type => {
    setSelectedType(type);
  };

  return (
    <div>
      <div css={sidePanelStyles}>
        <div css={topContainer}>
          <label htmlFor="location" css={locationLabel}>
            Location:
          </label>
          <div css={locationInputContainer}>
            {selectedLocation ? (
              <EnabledLocation css={iconStyle} />
            ) : (
              <DisabledLocation css={iconStyle} />
            )}
            <select id="location" value={selectedLocation} onChange={handleLocationChange} css={[locationInput, customSelectStyles]}>
              <option value="" disabled>
                City
              </option>
              {uniqueCountries.map((city, index) => (
                <option key={index} value={city}>
                  {city}, Ukraine
                </option>
              ))}
            </select>
          </div>
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
                selectedEquipment.includes('AC') && {
                  border: '1px solid rgb(228, 72, 72)',
                },
              ]}
              onClick={() => handleEquipmentClick('AC')}
            >
              <AC />
              AC
            </button>
            <button
              type="button"
              css={[
                equipmentItem,
                selectedEquipment.includes('Automatic') && {
                  border: '1px solid rgb(228, 72, 72)',
                },
              ]}
              onClick={() => handleEquipmentClick('Automatic')}
            >
              <Automatic />
              Automatic
            </button>
            <button
              type="button"
              css={[
                equipmentItem,
                selectedEquipment.includes('Kitchen') && {
                  border: '1px solid rgb(228, 72, 72)',
                },
              ]}
              onClick={() => handleEquipmentClick('Kitchen')}
            >
              <Kitchen />
              Kitchen
            </button>
            <button
              type="button"
              css={[
                equipmentItem,
                selectedEquipment.includes('TV') && {
                  border: '1px solid rgb(228, 72, 72)',
                },
              ]}
              onClick={() => handleEquipmentClick('TV')}
            >
              <TV />
              TV
            </button>
            <button
              type="button"
              css={[
                equipmentItem,
                selectedEquipment.includes('Shower') && {
                  border: '1px solid rgb(228, 72, 72)',
                },
              ]}
              onClick={() => handleEquipmentClick('Shower')}
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
                selectedType === 'Van' && {
                  border: '1px solid rgb(228, 72, 72)',
                },
              ]}
              onClick={() => handleTypeClick('Van')}
            >
              <Van />
              Van
            </button>
            <button
              type="button"
              css={[
                equipmentItem,
                selectedType === 'Fully Integrated' && {
                  border: '1px solid rgb(228, 72, 72)',
                },
              ]}
              onClick={() => handleTypeClick('Fully Integrated')}
            >
              <FullyIntegrated />
              Fully Integrated
            </button>
            <button
              type="button"
              css={[
                equipmentItem,
                selectedType === 'Alcove' && {
                  border: '1px solid rgb(228, 72, 72)',
                },
              ]}
              onClick={() => handleTypeClick('Alcove')}
            >
              <Alcove />
              Alcove
            </button>
          </div>
        </div>
   
      <button css={button}>Search</button>
    </div>
  );
};

export default SidePanel;
