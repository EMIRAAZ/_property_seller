import './addform.scss';
import Input from '../../../components/input/admininput';
import Button from '../../../components/button/SpinnerButton';
import { useNavigate, useLocation } from 'react-router-dom';
import { checkIfAllKeyHasValue } from '../../../utils';
import SingleImageUpload from '../../../components/singleimageupload';

const keyArr = [
  'agentName',
  'position',
  'yearsOfExperience',
  'username',
  'languages',
  'rera',
  'orn',
  'phoneNumber',
  'whatsAppNumber',
];

const AddForm = ({
  addAgent,
  editAgent,
  env,
  onChange,
  agentValue,
  editing,
  clearAddAgency,
  clrUpload,
  deleteAgentImage,
  addAgentImage,
}) => {
  let navigate = useNavigate();
  let location = useLocation();

  const getID = () => location.pathname.split('/').pop();

  const onChangeInput = (key, value) => {
    document.getElementById('on-add-warning').style.opacity = '0';
    onChange({ key, value });
  };

  const addAdminAgent = () => {
    if (checkIfAllKeyHasValue(agentValue, keyArr)) {
      document.getElementById('on-add-warning').style.opacity = '100';
      return;
    }
    if (editing) {
      editAgent(
        getID(),
        {
          ...agentValue,
        },
        () => {
          clearAddAgency();
          clrUpload();
          navigate(`/admin/add-agency/${agentValue.agencyId}`);
        }
      );
    } else {
      addAgent({ ...agentValue, agencyId: location.state.id }, () => {
        clearAddAgency();
        clrUpload();
        navigate(`/admin/add-agency/${location.state.id}`);
      });
    }
  };

  return (
    <div className="add-agent-form">
      <div className="add-left-agent-form">
        <Input
          divClass="agent-input"
          label="Agent Name"
          required
          value={agentValue.agentName}
          onChange={e => onChangeInput('agentName', e.target.value)}
        />
        <SingleImageUpload
          name="agencyLogo"
          label="Agency Logo"
          required
          value={agentValue.agentImage}
          onChange={addAgentImage}
          onDelete={deleteAgentImage}
        />
        <Input
          divClass="agent-input"
          label="Position"
          required
          value={agentValue.position}
          onChange={e => onChangeInput('position', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="RERA"
          required
          value={agentValue.rera}
          onChange={e => onChangeInput('rera', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="ORN"
          required
          value={agentValue.orn}
          onChange={e => onChangeInput('orn', e.target.value)}
        />
      </div>
      <div className="add-right-agent-form">
        <Input
          divClass="agent-input"
          label="Years Of Experience"
          required
          value={agentValue.yearsOfExperience}
          onChange={e => onChangeInput('yearsOfExperience', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="Username"
          required
          value={agentValue.username}
          onChange={e => onChangeInput('username', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="Password"
          required
          value={editing ? '' : agentValue.password}
          onChange={e => onChangeInput('password', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="Phone Number"
          required
          value={agentValue.phoneNumber}
          onChange={e => onChangeInput('phoneNumber', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="Whatsapp Number"
          required
          value={agentValue.whatsAppNumber}
          onChange={e => onChangeInput('whatsAppNumber', e.target.value)}
        />
        <Input
          divClass="agent-input"
          label="Languages"
          required
          value={agentValue.languages.toString()}
          onChange={e => onChangeInput('languages', e.target.value)}
        />
        <span id="on-add-warning" className="pls-fill">
          please fill all the required fields !!
        </span>
        <Button
          customClass="add-agent-btn"
          onClick={addAdminAgent}
          loading={env.loading}
        >
          ADD
        </Button>
      </div>
    </div>
  );
};

export default AddForm;
