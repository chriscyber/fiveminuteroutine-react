import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import Goal from "./Goal";
import GoalCreationModal from "./GoalCreationModal";
import { doc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { Stagger, FadeTransform } from "react-animation-components";

export default class AccountGoals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      GaolModalIsOpen: false,
      Goals: [],
    };

    this.ToggleGoalModal = this.ToggleGoalModal.bind(this);
    this.AddGoal = this.AddGoal.bind(this);
    this.GetGoalsFormDatabase = this.GetGoalsFormDatabase.bind(this);
  }

  ToggleGoalModal() {
    this.setState((state) => {
      return { GaolModalIsOpen: !state.GaolModalIsOpen };
    });
  }

  async componentDidMount() {
    await auth.onAuthStateChanged(async (user) => {
      await this.GetGoalsFormDatabase();
    });
  }

  async GetGoalsFormDatabase() {
    try {
      const docRef = doc(db, "users", `${auth.currentUser.email}`);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const Goals = docSnap.data().Goals;

        Goals.forEach((goal) => {
          this.setState((state) => {
            return {
              Goals: [
                ...state.Goals,
                { Title: goal.Title, Days: Number(goal.Days) },
              ],
            };
          });
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  }

  async AddGoal(Title, Days) {
    this.setState((state) => {
      return { Goals: [...state.Goals, { Title: Title, Days: Number(Days) }] };
    });

    try {
      const usersRef = doc(db, "users", `${auth.currentUser.email}`);
      await updateDoc(usersRef, {
        Goals: arrayUnion({ Title: Title, Days: Number(Days), Progress: 0 }),
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    return (
      <div>
        <GoalCreationModal
          modalToggle={this.ToggleGoalModal}
          modalIsOpen={this.state.GaolModalIsOpen}
          addGoal={this.AddGoal}
        />
        <Container fluid style={{ maxWidth: 1200 }}>
          <h3 className="mb-3">Morning Routine Goals</h3>
          <hr />
          <Stagger in>
            {this.state.Goals.map(function (item, i) {
              return (
                <FadeTransform
                  in
                  duration={25}
                  transformProps={{
                    exitTransform: "scale(0.5) translateY(50%)",
                  }}
                >
                  <Goal
                    key={i}
                    title={item.Title}
                    tag="health"
                    value={0}
                    max={item.Days}
                  />
                </FadeTransform>
              );
            })}
          </Stagger>

          <Button
            variant="primary"
            className="rounded-pill mt-5"
            onClick={this.ToggleGoalModal}
          >
            Add Goal
          </Button>
        </Container>
      </div>
    );
  }
}
