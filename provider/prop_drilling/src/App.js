/**
 * Structure:
 * 
 * App
 *  Sidebar
 *    List
 *      ListItem
 *        span
 *  Content
 *    Header
 *      div
 *    Block
 *      Text
 *        h1
 * 
 * If we look at this Tree, only the components with html elems:
 * (ListItem,Header,Text) actually consume/use the data, the remaining
 * components (App,Content,Sidebar,List,Block) are simply passing data down
 */
const Header = ({ data }) => <div>{data.title}</div>
const Text = ({ data }) => <h1>{data.text}</h1>
const Block = ({ data }) => <Text data={data}/>
const ListItem = ({ data }) => <span>{data.listItem}</span>
const List = ({ data }) => <ListItem data={data}/>
const SideBar = ({ data }) => <List data={data}/>


const Content = ({ data }) => (
  <>
    <Header data={data}/>
    <Block data={data}/>
  </>
)

function App() {

  const data = {
    title: 'Hello Title',
    listItem: 'Really cool item',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
  }

  return (
    <>
      <SideBar data={data}/>
      <Content data={data}/>
    </>
  );
}

export default App;
