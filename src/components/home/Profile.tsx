import React from "react";
import styled, { css } from "styled-components";
import { useQuery, useMutation } from "@apollo/client";
import { GetCurrentUser, Color, SetUserPreferences, SetUserPreferencesVariables } from "../../generatedTypes";
import { GET_CURRENT_USER_QUERY } from "../../graphql/getCurrentUser";
import { Header, Dropdown, Input, Button } from "semantic-ui-react";
import { playerColors } from "../../constants";
import { SET_USER_PREFERENCES_MUTATION } from "../../graphql/setUserPreferencesMutation";
import { useHistory } from "react-router";

interface ProfileProps {}

export const Profile: React.FC<ProfileProps> = () => {
  const history = useHistory();
  const { data } = useQuery<GetCurrentUser>(GET_CURRENT_USER_QUERY);
  const [saveUserPreferences, { loading }] = useMutation<SetUserPreferences, SetUserPreferencesVariables>(SET_USER_PREFERENCES_MUTATION, {
    onCompleted: () => history.push("/")
  });
  
  const [selectedColor, setSelectedColor] = React.useState(data.getCurrentUser.preferredColor);
  const [energy, setEnergy] = React.useState("");

  const dropdownOptions = [Color.RED, Color.YELLOW, Color.GREEN, Color.PURPLE, Color.BLACK]
    .map(color => ({
      key: color,
      value: color,
      selected: color === selectedColor,
      text: color.toLowerCase()
    }));

  const handleSubmit = () => {
    saveUserPreferences({
      variables: {
        preferredColor: selectedColor,
        we: energy.includes("weed")
      }
    })
  }
  
  return (
    <Container>
      <Box>
        <Header>{data.getCurrentUser.username}'s Profile</Header>
        <hr />
        <Dropdown
          placeholder="Favorite color"
          clearable
          selection
          options={dropdownOptions}
          defaultValue={selectedColor}
          onChange={(event, data) => setSelectedColor(data.value as Color)}
        >
        </Dropdown>
        <Input
          placeholder="Favorite type of energy"
          value={energy}
          onChange={e => setEnergy(e.target.value)}
        />
        <Button loading={loading} onClick={handleSubmit} primary>Save</Button>
      </Box>
    </Container>
  );
}

const Container = styled.div`
  height: calc(100% - 72px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  height: 300px;
  width: 350px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 24px 0;

  input {
    margin-top: 12px !important;
  }

  button {
    margin-top: auto !important;
  }
`;
