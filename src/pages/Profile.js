import React, { useEffect, useState } from "react";
import SideBar from "../components/Template/SideBar";
import Header from "../components/Teacher/Header";
import styled from "styled-components";
import Hamburger from "../components/Template/Hamburger";
import Main from "../layouts/Main";
import { Constants } from "../data/constants";
import { useDispatch, useSelector } from "react-redux";
import { selectEmail, selectUser } from "../app/account/selectors";
import { auth, userDataDb } from "../data/firebase";
import gearIcon from "../images/Icons/gear icon.png";
import StyledButton from "../components/Template/Button";
import { useHistory } from "react-router";
import { setPasswordLength, signIn } from "../app/account/actions";

const ModulesHomepage = () => {
  const user = useSelector(selectUser);
  const history = useHistory();
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState();
  const [inForm, setInForm] = useState(false);

  const handleSubmit = () => {
    setErrorMessage("");

    const data = Object.values(document.forms.profileForm).reduce(
      (obj, field) => {
        obj[field.name] = field.value;
        return obj;
      },
      {}
    );

    if (data.name !== user.displayName) {
      if (data.currPassword === "") {
        setErrorMessage("Enter password to change display name");
        return;
      } else {
        auth
          .signInWithEmailAndPassword(user.email, data.currPassword)
          .then(() => {
            auth.currentUser
              .updateProfile({ displayName: data.name })
              .then(() => {})
              .catch((response) => {
                setErrorMessage(response.message);
                error = true;
                return;
              });
          })
          .then(
            userDataDb
              .doc(auth.currentUser.uid)
              .update({
                displayName: data.name,
              })
              .then(
                userDataDb
                  .doc(auth.currentUser.uid)
                  .get()
                  .then((doc) => {
                    dispatch(signIn(doc.data()));
                  })
              )
          )
          .catch((response) => {
            setErrorMessage(response.message);
            return;
          });
      }
    }

    if (data.email !== user.email) {
      if (data.currPassword === "") {
        setErrorMessage("Enter password to change email");
        return;
      } else {
        auth
          .signInWithEmailAndPassword(user.email, data.currPassword)
          .then(() => {
            auth.currentUser
              .updateEmail(data.email)
              .then(() => {
                userDataDb
                  .doc(auth.currentUser.uid)
                  .update({
                    email: data.email,
                  })
                  .then(() =>
                    userDataDb
                      .doc(auth.currentUser.uid)
                      .get()
                      .then((doc) => dispatch(signIn(doc.data())))
                  );
              })
              .catch((response) => {
                setErrorMessage(response.message);
                error = true;
                return;
              });
          })
          .catch((response) => {
            setErrorMessage(response.message);
            return;
          });
      }
    }

    if (data.currPassword !== "" && data.newPassword !== "") {
      if (data.newPasswordConfirm !== data.newPassword) {
        setErrorMessage("New password must match");
        return;
      } else {
        auth
          .signInWithEmailAndPassword(user.email, data.currPassword)
          .then(() => {
            if (data.currPassword === data.newPassword) {
              setErrorMessage(
                "New password must be different than old password"
              );
              return;
            } else {
              auth.currentUser
                .updatePassword(data.newPassword)
                .then(() => {
                  dispatch(setPasswordLength(data.newPassword.length));
                })
                .catch((response) => {
                  // sets error message if something goes wrong
                  setErrorMessage(response.message);
                  return;
                });
            }
          })
          .catch((response) => {
            // sets error message if something goes wrong
            setErrorMessage(response.message);
            return;
          });
      }
    }
    setInForm(false);
  };

  return (
    <Main title={"Dashboard"} description={"Dashboard"}>
      <StyledHomepage>
        <SideBar />
        <Header />
        <Hamburger />
        <StyledBody>
          <BodyHeader>
            <TitleContainer>
              <StyledTitle>Profile</StyledTitle>
            </TitleContainer>
          </BodyHeader>
          <ProfileCard>
            <form id="profileForm">
              <StyledIcon
                src={gearIcon}
                onClick={() => {
                  setInForm(!inForm);
                  setErrorMessage("");
                }}
              />
              <StyledSectionHeader>Display Name</StyledSectionHeader>
              {inForm ? (
                <StyledInput
                  name="name"
                  defaultValue={user.displayName}
                ></StyledInput>
              ) : (
                <UserData>{user.displayName}</UserData>
              )}
              <StyledSectionHeader>Email</StyledSectionHeader>
              {inForm ? (
                <StyledInput
                  type="email"
                  name="email"
                  deafultValue={user.email}
                ></StyledInput>
              ) : (
                <UserData>{user.email}</UserData>
              )}
              {inForm ? (
                <>
                  <StyledSectionHeader>Current Password</StyledSectionHeader>
                  <StyledInput name="currPassword" type="password" />
                  <StyledSectionHeader>New Password</StyledSectionHeader>
                  <StyledInput name="newPassword" type="password" />
                  <StyledSectionHeader>
                    Confirm New Password
                  </StyledSectionHeader>
                  <StyledInput name="newPasswordConfirm" type="password" />
                </>
              ) : (
                <>
                  <StyledSectionHeader>Password</StyledSectionHeader>
                  <UserData>{"*".repeat(user.passwordLength)}</UserData>
                </>
              )}
              <StyledError>{errorMessage}</StyledError>
              {inForm && (
                <StyledSubmitButton
                  style={{ backgroundColor: `${Constants.COLOR.LIGHT_GREEN}` }}
                  onClick={handleSubmit}
                >
                  Submit
                </StyledSubmitButton>
              )}
            </form>
          </ProfileCard>
          <StyledSubmitButton
            data-test="home"
            onClick={() => history.push("/student/home")}
          >
            Back to Home
          </StyledSubmitButton>
        </StyledBody>
      </StyledHomepage>
    </Main>
  );
};

const StyledHomepage = styled.div``;

const StyledIcon = styled.img`
  width: 30px;
  position: absolute;
  right: 20px;
  top: 20px;
  &:hover {
    filter: brightness(110%);
    cursor: pointer;
  }
`;

const StyledError = styled.p`
  color: red;
`;

const StyledInput = styled.input`
  font-size: 18px;
  width: 50%;
  margin: 10px;
  background-color: white;
  padding: 10px;
  border-radius: 0.5em;
`;

const StyledBody = styled.div`
  margin-top: ${Constants.HEADER_HEIGHT};
  margin-left: ${Constants.SIDEBAR_WIDTH};
  padding: 0 50px;
`;

const StyledSubmitButton = styled(StyledButton)`
  font-size: 18px;
  padding: 5px;
  margin: 30px;
  width: 150px;
  background-color: ${Constants.COLOR.DARK_GREEN};
  &:hover {
    cursor: pointer;
  }
`;

const BodyHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ProfileCard = styled.div`
  background-color: ${Constants.COLOR.DARK_GREEN};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 10px;
  margin: 0px 10px;
  border-radius: 0.5em;
`;

const StyledTitle = styled.p`
  color: ${Constants.COLOR.GREEN};
  line-height: 36px;
  font-size: 30px;
  margin-right: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSectionHeader = styled.p`
  font-size: 20px;
  line-height: 43px;
  font-weight: 500;
`;

const UserData = styled.p`
  font-size: 18px;
  width: 50%;
  margin: 10px;
  background-color: white;
  padding: 10px;
  border-radius: 0.5em;
`;

export default ModulesHomepage;
