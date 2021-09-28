import { mount, shallow } from 'enzyme';
import { act } from 'react-dom/test-utils';

import App from './App';
import { Header } from './components/Header/Header';
import { Loading } from './components/Loading';
import * as LaunchesService from './services/api-service';


describe('renders <App />', () => {
  it('renders header correctly', () => {
    const component = shallow(<App />);
    expect(component.find('.App').length).toBe(1);
  });

  it('renders <Header /> component', () => {
    const component = shallow(<App />);
    expect(component.find(Header).length).toBe(1);
  });

  it('renders <Loading /> component', () => {
    const component = shallow(<App />);
    expect(component.find(Loading).length).toBe(1);
  });
});

describe('loads data', () => {
  it('loads data correctly', () => {
    // @ts-ignore
    LaunchesService.getLaunches = jest.fn();

    mount(<App />);
    expect(LaunchesService.getLaunches).toHaveBeenCalledTimes(1);
  });

  it('loads data throw an error', async () => {
    const errorFunc = () => {
      throw new Error("Error");
    };
    // @ts-ignore
    LaunchesService.getLaunches = () => errorFunc();

    act(() => { mount(<App />) });
    expect(LaunchesService.getLaunches).toThrowError();
  });
});
