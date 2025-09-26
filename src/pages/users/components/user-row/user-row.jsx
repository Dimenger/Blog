import PropTypes from "prop-types";
import { useServerRequest } from "../../../../hooks";
import { Icon } from "../../../../components/icon/icon";
import { TableRow } from "../table-row/table-row";

import styled from "styled-components";
import { useState } from "react";
import { PROP_TYPE } from "../../../../constants";

const UserRowContainer = ({
  className,
  id,
  login,
  registeredAt,
  roleId: userRoleId,
  roles,
  onUserRemove,
}) => {
  const [initialRoleId, setInitialRoleId] = useState(userRoleId);
  const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);

  const requestServer = useServerRequest();

  const onRoleChange = ({ target }) => {
    setSelectedRoleId(Number(target.value));
  };

  const onRoleSave = (userId, newUserRoleId) => {
    requestServer("updateUserRole", userId, newUserRoleId);
    setInitialRoleId(newUserRoleId);
  };

  const isSaveButtonDisabled = selectedRoleId === initialRoleId;

  return (
    <div className={className}>
      <TableRow border={true}>
        <div className="login-column">{login}</div>
        <div className="registered-at-column">{registeredAt}</div>
        <div className="role-column">
          <select value={selectedRoleId} onChange={onRoleChange}>
            {roles.map(({ id: roleId, name: roleName }) => (
              <option key={roleId} value={roleId}>
                {roleName}
              </option>
            ))}
          </select>
          <Icon
            id="fa-floppy-o"
            margin="8px 0 0 10px"
            disabled={isSaveButtonDisabled}
            onClick={() => onRoleSave(id, selectedRoleId)}
          />
        </div>{" "}
      </TableRow>
      <Icon id="fa-trash-o" margin="14px 0 0 10px" onClick={onUserRemove} />
    </div>
  );
};

export const UserRow = styled(UserRowContainer)`
  display: flex;
  margin-top: 10px;

  & select {
    padding: 0 5 px;
    font-size: 16px;
  }
`;

UserRow.PropTypes = {
  id: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  registeredAt: PropTypes.string.isRequired,
  roleId: PROP_TYPE.ROLE.isRequired,
  roles: PropTypes.arrayOf(PROP_TYPE.ROLE).isRequired,
  onUserRemove: PropTypes.func.isRequired,
};
