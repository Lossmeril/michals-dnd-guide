import CharacterEditor from "../../_editor/characterEditor";

const EditCharacterPage = async ({
  params,
}: PageProps<"/characters/[id]/editor">) => {
  const { id } = await params;
  return <CharacterEditor characterId={Number(id)} />;
};

export default EditCharacterPage;
