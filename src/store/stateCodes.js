let initialState = {
  stateCodes: [
    {
      stateCode: 'WA',
      fullName: 'Washington'
    },
    {
      stateCode: 'OR',
      fullName: 'Oregon'
    },
    {
      stateCode: 'CA',
      fullName: 'California'
    },
    {
      stateCode: 'ID',
      fullName: 'Idaho'
    },
    {
      stateCode: 'NV',
      fullName: 'Nevada'
    },
    {
      stateCode: 'AZ',
      fullName: 'Arizona'
    },
    {
      stateCode: 'UT',
      fullName: 'Utah'
    },
    {
      stateCode: 'MT',
      fullName: 'Montana'
    },
    {
      stateCode: 'WY',
      fullName: 'Wyoming'
    },
    {
      stateCode: 'CO',
      fullName: 'Colorado'
    },
    {
      stateCode: 'NM',
      fullName: 'New Mexico'
    },
    {
      stateCode: 'ND',
      fullName: 'North Dakota'
    },
    {
      stateCode: 'SD',
      fullName: 'South Dakota'
    },
    {
      stateCode: 'NE',
      fullName: 'Nebraska'
    },
    {
      stateCode: 'KS',
      fullName: 'Kansas'
    },
    {
      stateCode: 'OK',
      fullName: 'Oklahoma'
    },
    {
      stateCode: 'TX',
      fullName: 'Texas'
    },
    {
      stateCode: 'MN',
      fullName: 'Minnesota'
    },
    {
      stateCode: 'IA',
      fullName: 'Iowa'
    },
    {
      stateCode: 'MO',
      fullName: 'Missouri'
    },
    {
      stateCode: 'AR',
      fullName: 'Arkansas'
    },
    {
      stateCode: 'LA',
      fullName: 'Louisiana'
    },
    {
      stateCode: 'WI',
      fullName: 'Wisconsin'
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
      stateCode: 'IN',
      fullName: 'Indiana'
    },
    {
      stateCode: 'KY',
      fullName: 'Kentucky'
    },
    {
      stateCode: 'OH',
      fullName: 'Ohio'
    },
    {
      stateCode: 'WV',
      fullName: 'West Virginia'
    },
    {
      stateCode: 'TN',
      fullName: 'Tennessee'
    },
    {
      stateCode: 'MS',
      fullName: 'Mississippi'
    },
    {
      stateCode: 'AL',
      fullName: 'Alabama'
    },
    {
      stateCode: 'GA',
      fullName: 'Georgia'
    },
    {
      stateCode: 'FL',
      fullName: 'Florida'
    },
    {
      stateCode: 'SC',
      fullName: 'South Carolina'
    },
    {
      stateCode: 'NC',
      fullName: 'North Carolina'
    },
    {
      stateCode: 'VA',
      fullName: 'Virginia'
    },
    {
      stateCode: 'DC',
      fullName: 'District of Columbia'
    },
    {
      stateCode: 'MD',
      fullName: 'Maryland'
    },
    {
      stateCode: 'DE',
      fullName: 'Delaware'
    },
    {
      stateCode: 'NJ',
      fullName: 'New Jersey'
    },
    {
      stateCode: 'NY',
      fullName: 'New York'
    },
    {
      stateCode: 'CT',
      fullName: 'Connnecticut'
    },
    {
      stateCode: 'RI',
      fullName: 'Rhode Island'
    },
    {
      stateCode: 'MA',
      fullName: 'Massachusetts '
    },
    {
      stateCode: 'VT',
      fullName: 'Vermont'
    },
    {
      stateCode: 'NH',
      fullName: 'New Hampshire'
    },
    {
      stateCode: 'ME',
      fullName: 'Maine'
    },
    {
      stateCode: 'AK',
      fullName: 'Alaska'
    },
    {
      stateCode: 'HI',
      fullName: 'Hawaii'
    }
  ],
  activeStateCode: ''
}

//===== REDUCER

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch(type) {
    case 'CHANGE STATECODE':
      let activeStateCode = payload;
      return {...state, activeStateCode};

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

export const reset = () => {
  return {
    type: 'RESET'
  }
}