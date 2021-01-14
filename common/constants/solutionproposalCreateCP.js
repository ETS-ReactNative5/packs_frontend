import { createFields } from 'common/formFields/createCP/solutionProposalCreateCP.formFields';


export const solutionAssetOptions = [
  'FLC',
  'FSC',
  'CRT6412',
  'CRT6418',
  'CRT6423',
  'CRT6435',
  'Palletized CRT6412',
  'Palletized CRT6418',
  'Palletized CRT6423',
  'Palletized CRT6435',
  'PP BOX',
  'Palletized PP Box',
  'Plastic Pallet',
  'Wooden Pallet',
]

export const getLabels = (type,insertType)=>{
  const specifications = {
    'FLC':insertType==='Insert'?[
      'FLC',
      'Insert Type 1',
      'Insert Type 2',
      'Separator Sheet',
    ]:[
      'FLC',
      'Separator Sheet',
      'Mould',
      'HDPE',
    ],
    'FSC':insertType==='Insert'?[
      'FSC',
      'Insert Type 1',
      'Insert Type 2',
      'Separator Sheet',
    ]:[
      'FSC',
      'Separator Sheet',
      'Mould',
      'HDPE',
    ],
    'CRT6412':insertType==='Insert'?[
      'CRT6412',
      'Crate Lid',
      'Insert Type 1',
      'Insert Type 2',
      'Separator Sheet',
    ]:[
      'CRT6412',
      'Crate Lid',
      'Separator Sheet',
      'Mould',
      'HDPE',
    ],
    'CRT6418':insertType==='Insert'?[
      'CRT6418',
      'Crate Lid',
      'Insert Type 1',
      'Insert Type 2',
      'Separator Sheet',
    ]:[
      'CRT6418',
      'Crate Lid',
      'Separator Sheet',
      'Mould',
      'HDPE',
    ],
    'CRT6423':insertType==='Insert'?[
      'CRT6423',
      'Crate Lid',
      'Insert Type 1',
      'Insert Type 2',
      'Separator Sheet'
    ]:[
      'CRT6423',
      'Crate Lid',
      'Separator Sheet',
      'Mould',
      'HDPE',
    ],
    'CRT6435':insertType==='Insert'?[
      'CRT6435',
      'Crate Lid',
      'Insert Type 1',
      'Insert Type 2',
      'Separator Sheet'
    ]:[
      'CRT6435',
      'Crate Lid',
      'Separator Sheet',
      'Mould',
      'HDPE',
    ],
    'Palletized CRT6412':insertType==='Insert'?[
      'Palletized CRT6412',
      'Crate Lid',
      'Palletized Lid',
      'Pallet',
      'Insert Type 1',
      'Insert Type 2',
      'Separator Sheet'
    ]:[
      'Palletized CRT6412',
      'Crate Lid',
      'Palletized Lid',
      'Pallet',
      'Separator Sheet',
      'Mould',
      'HDPE',
    ],
    'Palletized CRT6418':insertType==='Insert'?[
      'Palletized CRT6418',
      'Crate Lid',
      'Palletized Lid',
      'Pallet',
      'Insert Type 1',
      'Insert Type 2',
      'Separator Sheet'
    ]:[
      'Palletized CRT6418',
      'Crate Lid',
      'Palletized Lid',
      'Pallet',
      'Separator Sheet',
      'Mould',
      'HDPE',
    ],
    'Palletized CRT6423':insertType==='Insert'?[
      'Palletized CRT6423',
      'Crate Lid',
      'Palletized Lid',
      'Pallet',
      'Insert Type 1',
      'Insert Type 2',
      'Separator Sheet'
    ]:[
      'Palletized CRT6423',
      'Crate Lid',
      'Palletized Lid',
      'Pallet',
      'Separator Sheet',
      'Mould',
      'HDPE',],
    'Palletized CRT6435':insertType==='Insert'?[
      'Palletized CRT6435',
      'Crate Lid',
      'Palletized Lid',
      'Pallet',
      'Insert Type 1',
      'Insert Type 2',
      'Separator Sheet'
    ]:[
      'Palletized CRT6435',
      'Crate Lid',
      'Palletized Lid',
      'Pallet',
      'Separator Sheet',
      'Mould',
      'HDPE',
    ],
    'PP BOX':[
      'PP BOX',
    ],
    'Palletized PP Box':[
      'Palletized PP Box',
      'Palletized Lid',
      'Pallet',
    ],
    'Plastic Pallet':[
      'Plastic Pallet',
      'Palletized Lid',
    ],
    'Wooden Pallet':[
      'Wooden Pallet',
      'Palletized Lid',]
  };
  return specifications[type];
}


export const getFields = (type,insertType) => {
  const specifications = {
    'FLC':insertType==='Insert'?createFields([
      'std_ast',
      'insert1',
      'insert2',
      'sep_sheet',
    ]):createFields([
      'std_ast',
      'sep_sheet',
      'mould',
      'hdpe',
    ]),
    'FSC':insertType==='Insert'?createFields([
      'std_ast',
      'insert1',
      'insert2',
      'sep_sheet',
    ]):createFields([
      'std_ast',
      'sep_sheet',
      'mould',
      'hdpe',
    ]),
    'CRT6412':insertType==='Insert'?createFields([
      'std_ast',
      'crate_lid',
      'insert1',
      'insert2',
      'sep_sheet',
    ]):createFields([
      'std_ast',
      'crate_lid',
      'sep_sheet',
      'mould',
      'hdpe',
    ]),
    'CRT6418':insertType==='Insert'?createFields([
      'std_ast',
      'crate_lid',
      'insert1',
      'insert2',
      'sep_sheet',
    ]):createFields([
      'std_ast',
      'crate_lid',
      'sep_sheet',
      'mould',
      'hdpe',
    ]),
    'CRT6423':insertType==='Insert'?createFields([
      'std_ast',
      'crate_lid',
      'insert1',
      'insert2',
      'sep_sheet',
    ]):createFields([
      'std_ast',
      'crate_lid',
      'sep_sheet',
      'mould',
      'hdpe',
    ]),
    'CRT6435':insertType==='Insert'?createFields([
      'std_ast',
      'crate_lid',
      'insert1',
      'insert2',
      'sep_sheet',
    ]):createFields([
      'std_ast',
      'crate_lid',
      'sep_sheet',
      'mould',
      'hdpe',
    ]),
    'Palletized CRT6412':insertType==='Insert'?createFields([
      'std_ast',
      'crate_lid',
      'palletized_lid',
      'pallet',
      'insert1',
      'insert2',
      'sep_sheet',
    ]):createFields([
      'std_ast',
      'crate_lid',
      'palletized_lid',
      'pallet',
      'sep_sheet',
      'mould',
      'hdpe',
    ]),
    'Palletized CRT6418':insertType==='Insert'?createFields([
      'std_ast',
      'crate_lid',
      'palletized_lid',
      'pallet',
      'insert1',
      'insert2',
      'sep_sheet',
    ]):createFields([
      'std_ast',
      'crate_lid',
      'palletized_lid',
      'pallet',
      'sep_sheet',
      'mould',
      'hdpe',
    ]),
    'Palletized CRT6423':insertType==='Insert'?createFields([
      'std_ast',
      'crate_lid',
      'palletized_lid',
      'pallet',
      'insert1',
      'insert2',
      'sep_sheet',
    ]):createFields([
      'std_ast',
      'crate_lid',
      'palletized_lid',
      'pallet',
      'sep_sheet',
      'mould',
      'hdpe',
    ]),
    'Palletized CRT6435':insertType==='Insert'?createFields([
      'std_ast',
      'crate_lid',
      'palletized_lid',
      'pallet',
      'insert1',
      'insert2',
      'sep_sheet',
    ]):createFields([
      'std_ast',
      'crate_lid',
      'palletized_lid',
      'pallet',
      'sep_sheet',
      'mould',
      'hdpe',
    ]),
    'PP BOX':insertType==='Insert'?createFields([
      'std_ast',
    ]):createFields([
      'std_ast',
    ]),
    'Palletized PP Box':createFields([
      'std_ast',
      'palletized_lid',
      'pallet',
    ]),
    'Plastic Pallet':createFields([
      'std_ast',
      'palletized_lid',
    ]),
    'Wooden Pallet':createFields([
      'std_ast',
      'palletized_lid',
    ])
  };
  return specifications[type];
};


export const formatStr = (str,typeStr) => {
  return `${str}_${typeStr}`;
}

export const getFieldsByColumn = (type,insertType,typeStr) => {
  const specifications = {
    'FLC':insertType==='Insert'? [
      formatStr('std_ast',typeStr),
      formatStr('insert1',typeStr),
      formatStr('insert2',typeStr),
      formatStr('sep_sheet',typeStr),
    ]:[
      formatStr('std_ast',typeStr),
      formatStr('sep_sheet',typeStr),
      formatStr('mould',typeStr),
      formatStr('hdpe',typeStr),
    ],
    'FSC':insertType==='Insert'?[
      formatStr('std_ast',typeStr),
      formatStr('insert1',typeStr),
      formatStr('insert2',typeStr),
      formatStr('sep_sheet',typeStr),
    ]:[
      formatStr('std_ast',typeStr),
      formatStr('sep_sheet',typeStr),
      formatStr('mould',typeStr),
      formatStr('hdpe',typeStr),
    ],
    'CRT6412':insertType==='Insert'?[
      formatStr('std_ast',typeStr),
      formatStr('crate_lid',typeStr),
      formatStr('insert1',typeStr),
      formatStr('insert2',typeStr),
      formatStr('sep_sheet',typeStr),
    ]:[
      formatStr('std_ast',typeStr),
      formatStr('crate_lid',typeStr),
      formatStr('sep_sheet',typeStr),
      formatStr('mould',typeStr),
      formatStr('hdpe',typeStr),
    ],
    'CRT6418':insertType==='Insert'?([
      formatStr('std_ast',typeStr),
      formatStr('crate_lid',typeStr),
      formatStr('insert1',typeStr),
      formatStr('insert2',typeStr),
      formatStr('sep_sheet',typeStr),
    ]):([
      formatStr('std_ast',typeStr),
      formatStr('crate_lid',typeStr),
      formatStr('sep_sheet',typeStr),
      formatStr('mould',typeStr),
      formatStr('hdpe',typeStr),
    ]),
    'CRT6423':insertType==='Insert'?([
      formatStr('std_ast',typeStr),
      formatStr('crate_lid',typeStr),
      formatStr('insert1',typeStr),
      formatStr('insert2',typeStr),
      formatStr('sep_sheet',typeStr),
    ]):([
      formatStr('std_ast',typeStr),
      formatStr('crate_lid',typeStr),
      formatStr('sep_sheet',typeStr),
      formatStr('mould',typeStr),
      formatStr('hdpe',typeStr),
    ]),
    'CRT6435':insertType==='Insert'?([
      formatStr('std_ast',typeStr),
      formatStr('crate_lid',typeStr),
      formatStr('insert1',typeStr),
      formatStr('insert2',typeStr),
      formatStr('sep_sheet',typeStr),
    ]):([
      formatStr('std_ast',typeStr),
      formatStr('crate_lid',typeStr),
      formatStr('sep_sheet',typeStr),
      formatStr('mould',typeStr),
      formatStr('hdpe',typeStr),
    ]),
    'Palletized CRT6412':insertType==='Insert'?([
      formatStr('std_ast',typeStr),
      formatStr('crate_lid',typeStr),
      formatStr('palletized_lid',typeStr),
      formatStr('pallet',typeStr),
      formatStr('insert1',typeStr),
      formatStr('insert2',typeStr),
      formatStr('sep_sheet',typeStr),
    ]):([
      formatStr('std_ast',typeStr),
      formatStr('crate_lid',typeStr),
      formatStr('palletized_lid',typeStr),
      formatStr('pallet',typeStr),
      formatStr('sep_sheet',typeStr),
      formatStr('mould',typeStr),
      formatStr('hdpe',typeStr),
    ]),
    'Palletized CRT6418':insertType==='Insert'?([
      formatStr('std_ast',typeStr),
      formatStr('crate_lid',typeStr),
      formatStr('palletized_lid',typeStr),
      formatStr('pallet',typeStr),
      formatStr('insert1',typeStr),
      formatStr('insert2',typeStr),
      formatStr('sep_sheet',typeStr),
    ]):([
      formatStr('std_ast',typeStr),
      formatStr('crate_lid',typeStr),
      formatStr('palletized_lid',typeStr),
      formatStr('pallet',typeStr),
      formatStr('sep_sheet',typeStr),
      formatStr('mould',typeStr),
      formatStr('hdpe',typeStr),
    ]),
    'Palletized CRT6423':insertType==='Insert'?([
      formatStr('std_ast',typeStr),
      formatStr('crate_lid',typeStr),
      formatStr('palletized_lid',typeStr),
      formatStr('pallet',typeStr),
      formatStr('insert1',typeStr),
      formatStr('insert2',typeStr),
      formatStr('sep_sheet',typeStr),
    ]):([
      formatStr('std_ast',typeStr),
      formatStr('crate_lid',typeStr),
      formatStr('palletized_lid',typeStr),
      formatStr('pallet',typeStr),
      formatStr('sep_sheet',typeStr),
      formatStr('mould',typeStr),
      formatStr('hdpe',typeStr),
    ]),
    'Palletized CRT6435':insertType==='Insert'?([
      formatStr('std_ast',typeStr),
      formatStr('crate_lid',typeStr),
      formatStr('palletized_lid',typeStr),
      formatStr('pallet',typeStr),
      formatStr('insert1',typeStr),
      formatStr('insert2',typeStr),
      formatStr('sep_sheet',typeStr),
    ]):([
      formatStr('std_ast',typeStr),
      formatStr('crate_lid',typeStr),
      formatStr('palletized_lid',typeStr),
      formatStr('pallet',typeStr),
      formatStr('sep_sheet',typeStr),
      formatStr('mould',typeStr),
      formatStr('hdpe',typeStr),
    ]),
    'PP BOX':insertType==='Insert'?([
      formatStr('std_ast',typeStr),
    ]):([
      formatStr('std_ast',typeStr),
    ]),
    'Palletized PP Box':([
      formatStr('std_ast',typeStr),
      formatStr('palletized_lid',typeStr),
      formatStr('pallet',typeStr),
    ]),
    'Plastic Pallet':([
      formatStr('std_ast',typeStr),
      formatStr('palletized_lid',typeStr),
    ]),
    'Wooden Pallet':([
      formatStr('std_ast',typeStr),
      formatStr('palletized_lid',typeStr),
    ])
  };
  return specifications[type];
};

export const getDefaultMonthValue = type => {
  switch (type) {
    case "std_ast":
      return 18;
    case "crate_lid":
      return 12;
    case "palletized_lid":
      return 12;
    case "insert1":
      return 12;
    case "insert2":
      return 12;
    case "sep_sheet":
      return 12;
    case "mould":
      return 18;
    case "hdpe":
      return 12;
    default:
      return 0;
  }
}