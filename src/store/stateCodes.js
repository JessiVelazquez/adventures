let initialState = {
  stateCodes: [
    {
      stateCode: 'AL',
      fullName: 'Alabama'
    },
    {
      stateCode: 'AK',
      fullName: 'Alaska'
    },
    {
      stateCode: 'AZ',
      fullName: 'Arizona'
    },
    {
      stateCode: 'AR',
      fullName: 'Arkansas'
    },
    {
      stateCode: 'CA',
      fullName: 'California'
    },
    {
      stateCode: 'CO',
      fullName: 'Colorado'
    },
    {
      stateCode: 'CT',
      fullName: 'Connecticut'
    },
    {
      stateCode: 'DE',
      fullName: 'Delaware'
    },
    {
      stateCode: 'DC',
      fullName: 'District of Columbia'
    },
    {
      stateCode: 'FL',
      fullName: 'Florida'
    },
    {
      stateCode: 'GA',
      fullName: 'Georgia'
    },
    {
      stateCode: 'HI',
      fullName: 'Hawaii'
    },
    {
      stateCode: 'ID',
      fullName: 'Idaho'
    },
    {
      stateCode: 'IL',
      fullName: 'Illinois'
    },
    {
      stateCode: 'IN',
      fullName: 'Indiana'
    },
    {
      stateCode: 'IA',
      fullName: 'Iowa'
    },
    {
      stateCode: 'KS',
      fullName: 'Kansas'
    },
    {
      stateCode: 'KY',
      fullName: 'Kentucky'
    },
    {
      stateCode: 'LA',
      fullName: 'Louisiana'
    },
    {
      stateCode: 'ME',
      fullName: 'Maine'
    },
    {
      stateCode: 'MD',
      fullName: 'Maryland'
    },
    {
      stateCode: 'MA',
      fullName: 'Massachusetts'
    },
    {
      stateCode: 'MI',
      fullName: 'Michigan'
    },
    {
      stateCode: 'IL',
      fullName: 'Illinios'
    },
    {
      stateCode: 'MI',
      fullName: 'Michigan'
    },
    {
      stateCode: 'MN',
      fullName: 'Minnesota'
    },
    {
      stateCode: 'MS',
      fullName: 'Mississippi'
    },
    {
      stateCode: 'MO',
      fullName: 'Missouri'
    },
    {
      stateCode: 'MT',
      fullName: 'Montana'
    },
    {
      stateCode: 'NE',
      fullName: 'Nebraska'
    },
    {
      stateCode: 'NV',
      fullName: 'Nevada'
    },
    {
      stateCode: 'NH',
      fullName: 'New Hampshire'
    },
    {
      stateCode: 'NJ',
      fullName: 'New Jersey'
    },
    {
      stateCode: 'NM',
      fullName: 'New Mexico'
    },
    {
      stateCode: 'NY',
      fullName: 'New York'
    },
    {
      stateCode: 'NC',
      fullName: 'North Carolina'
    },
    {
      stateCode: 'ND',
      fullName: 'North Dakota'
    },
    {
      stateCode: 'OH',
      fullName: 'Ohio'
    },
    {
      stateCode: 'OK',
      fullName: 'Oklahoma'
    },
    {
      stateCode: 'OR',
      fullName: 'Oregon'
    },
    {
      stateCode: 'PA',
      fullName: 'Pennsylvania'
    },
    {
      stateCode: 'PR',
      fullName: 'Puerto Rico'
    },
    {
      stateCode: 'RI',
      fullName: 'Rhode Island'
    },
    {
      stateCode: 'SC',
      fullName: 'South Carolina'
    },
    {
      stateCode: 'TN',
      fullName: 'Tennessee'
    },
    {
      stateCode: 'TX',
      fullName: 'Texas'
    },
    {
      stateCode: 'UT',
      fullName: 'Utah'
    },
    {
      stateCode: 'VT',
      fullName: 'Vermont'
    },
    {
      stateCode: 'VA',
      fullName: 'Virginia'
    },
    {
      stateCode: 'VI',
      fullName: 'Virgin Islands'
    },
    {
      stateCode: 'WA',
      fullName: 'Washington'
    },
    {
      stateCode: 'WV',
      fullName: 'West Virginia'
    },
    {
      stateCode: 'WI',
      fullName: 'Wisconsin'
    },
    {
      stateCode: 'WY',
      fullName: 'Wyoming'
    }
  ],
  activeStateCode: '',
  activeStateFullName: ''
}

//===== REDUCER

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'CHANGE STATECODE':
      let activeStateCode = payload;
      return {...state, activeStateCode};

    case 'CHANGE STATE FULLNAME':
      let activeStateFullName = payload;
      return {...state, activeStateFullName};

    case 'RESET':
      return initialState;

    default:
      return state
  }
}

//====== ACTIONS

export const changeStateCode = (stateCode) => {
  return {
    type: 'CHANGE STATECODE',
    payload: stateCode
  }
}

export const changeFullName = (fullName) => {
  return {
    type: 'CHANGE STATE FULLNAME',
    payload: fullName
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}