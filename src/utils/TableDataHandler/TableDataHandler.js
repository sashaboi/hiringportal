import { data } from "./candidatedata";
import Avatar from "@atlaskit/avatar";
import EmailIcon from "@atlaskit/icon/glyph/email";
import TrashIcon from "@atlaskit/icon/glyph/trash";
import ExportIcon from "@atlaskit/icon/glyph/export";
import DropdownMenu, {
  DropdownItem,
  DropdownItemGroup,
} from "@atlaskit/dropdown-menu";

function createKey(input) {
  return input ? input.replace(/^(the|a|an)/, "").replace(/\s/g, "") : input;
}

export const createHead = (withWidth) => {
  return {
    cells: [
      {
        key: "name",
        content: "Profilepic",

        width: withWidth ? 5 : undefined,
      },
      {
        key: "string",
        content: "Name",
        isSortable: true,
        width: withWidth ? 15 : undefined,
      },
      {
        key: "email",
        content: "Email",
        shouldTruncate: true,

        width: withWidth ? 15 : undefined,
      },
      {
        key: "location",
        content: "Location",
        shouldTruncate: true,

        width: withWidth ? 10 : undefined,
      },
      {
        key: "tech",
        content: "TechStack",
        shouldTruncate: true,

        width: withWidth ? 10 : undefined,
      },
      {
        key: "Visit",
        content: "Actions",
        shouldTruncate: true,
      },
    ],
  };
};

export const head = createHead(true);

export const rows = data.map((candidate) => ({
  key: candidate.id,
  isHighlighted: false,
  cells: [
    {
      key: createKey(candidate.image),
      content: (
        <Avatar
          appearance="circle"
          src={candidate.image}
          size="large"
          name="John Doe"
        />
      ),
    },
    {
      key: createKey(candidate.name),
      content: <p> {candidate.name}</p>,
    },
    {
      key: createKey(candidate.email),
      content: candidate.email,
    },
    {
      key: candidate.id,
      content: candidate.location,
    },
    {
      key: "Lorem",
      content: candidate.tech,
    },
    {
      content: (
        <DropdownMenu trigger="More">
          <DropdownItemGroup>
            <DropdownItem>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <EmailIcon /> Send notification Email
              </div>
            </DropdownItem>

            <DropdownItem>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <ExportIcon />
                Export Resume
              </div>
            </DropdownItem>
            <div>
              <DropdownItem>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                  }}
                >
                  <TrashIcon />
                  Remove From List
                </div>
              </DropdownItem>
            </div>
          </DropdownItemGroup>
        </DropdownMenu>
      ),
    },
  ],
}));
