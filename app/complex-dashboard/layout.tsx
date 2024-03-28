export default function DashBoardLayout({
  children,
  userAnalystics,
  reveuneMetrics,
  notifications,
  login
}: {
  children: React.ReactNode,
  userAnalystics: React.ReactNode,
  reveuneMetrics: React.ReactNode,
  notifications: React.ReactNode,
  login : React.ReactDOM
}) {
  const isLoggedIn = false;
  return isLoggedIn ?(
    <>
      <div> {children} </div>
      <div style={{display: 'flex'}}>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div>{userAnalystics}</div>
          <div>{reveuneMetrics}</div>
        </div>
        <div style={{display: "flex", flex: 1}}> {notifications}</div>
      </div>
    </>
  ) : (login)
}
