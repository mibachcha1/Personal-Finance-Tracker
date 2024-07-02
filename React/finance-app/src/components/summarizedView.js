import React from "react";

const SummarizedView = ({starting,goal,debt,income, checks}) => {

  const overall = starting + income - debt
  const remaining = goal - overall
  const average = Math.round(remaining/(9-checks))
  const hours = (average/15.50).toFixed(2)
  return (
    <>
      <div className="mt-5 container">
        <h3 style={{ color: "black", fontWeight:"800" }}>Summary:</h3>
        <hr />
        <div className="card text-center">
          <div>
            <div className="row" style={{ padding: "25px" }}>
            <div className="col-md-3" style={{ paddingBottom: "10px" }}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "black" }}>
                      Starting Balance
                    </h5>
                    <h5 className="card-text" style={{ color: "black" }}>${starting.toLocaleString()}</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style={{ paddingBottom: "10px" }}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "black" }}>
                      Goal Balance:
                    </h5>
                    <h5 className="card-text" style={{ color: "black" }}>${goal.toLocaleString()}</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style={{ paddingBottom: "10px" }}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "black" }}>
                      Total Debt:
                    </h5>
                    <h5 className="card-text" style={{ color: "black" }}>${debt.toLocaleString()}</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style={{ paddingBottom: "10px" }}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "black" }}>
                      Total Income:
                    </h5>
                    <h5 className="card-text" style={{ color: "black" }}>${income.toLocaleString()}</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style={{ paddingBottom: "10px" }}>
                <div className="card bg-grey">
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "black" }}>
                      Overall Balance:
                    </h5>
                    <h5 className="card-text" style={{ color: "black", fontWeight:"bold"}}>${overall.toLocaleString()}</h5>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style={{ paddingBottom: "10px" }}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "black" }}>
                      Total Remaining:
                    </h5>
                    <h5 className="card-text" style={{ color: "black" }}>
                    <h5 className="card-text" style={{ color: "black", fontWeight:"bold"}}>${remaining.toLocaleString()}</h5>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style={{ paddingBottom: "10px" }}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "black" }}>
                      Weekly Income Needed
                    </h5>
                    <h5 className="card-text" style={{ color: "black" }}>
                    <h5 className="card-text" style={{ color: "black"}}>${average.toLocaleString()}</h5>
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col-md-3" style={{ paddingBottom: "10px" }}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title" style={{ color: "black" }}>
                      Weekly Hours Needed
                    </h5>
                    <h5 className="card-text" style={{ color: "black" }}>
                    <h5 className="card-text" style={{ color: "black"}}>{hours.toLocaleString()}</h5>
                    </h5>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SummarizedView;
