interface Props {
  title: string;
  description?: string;
}

const CustomJumbotron = ({ title, description }: Props) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
        {title}
      </h1>
      {description && (
        <p className="text-gray-600 text-lg">
          Discover, explore, and manage your favorite superheroes and villains
        </p>
      )}
    </div>
  );
};

export default CustomJumbotron;
