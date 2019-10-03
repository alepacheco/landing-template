import '../css/index.scss';
import HelloWorld from '../components/HelloWorld';

const Index = () => {
  return (
    <div className="page">
      <HelloWorld />

      <style jsx>{`
        .page {
          margin-top: 10vh;
          font-family: monospace;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default Index;
