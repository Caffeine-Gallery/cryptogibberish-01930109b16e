export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'decrement' : IDL.Func([], [IDL.Int], []),
    'getCount' : IDL.Func([], [IDL.Int], ['query']),
    'increment' : IDL.Func([], [IDL.Int], []),
  });
};
export const init = ({ IDL }) => { return []; };
