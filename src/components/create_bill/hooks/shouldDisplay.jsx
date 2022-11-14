const shouldDisplay = (
  isFetchingCustomers,
  isFetchingWaiters,
  isFetchingTables,
  isFetchingManagers
) => {
  const shouldDisplay =
    isFetchingCustomers ||
    isFetchingWaiters ||
    isFetchingTables ||
    isFetchingManagers
      ? true
      : false;

  return shouldDisplay;
};


export default shouldDisplay;