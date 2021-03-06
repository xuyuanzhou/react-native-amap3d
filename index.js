import MapView from './components/maps/MapView'
import Marker from './components/maps/Marker'
import Polyline from './components/maps/Polyline'
import Polygon from './components/maps/Polygon'
import Circle from './components/maps/Circle'
import HeatMap from './components/maps/HeatMap'
import MultiPoint from './components/maps/MultiPoint'
import Navigation from './components/navigation'
import MapUtils from './components/Utils'

MapView.Marker = Marker
MapView.Polyline = Polyline
MapView.Polygon = Polygon
MapView.Circle = Circle
MapView.HeatMap = HeatMap
MapView.MultiPoint = MultiPoint

export default MapView
export {
  MapView,
  Marker,
  Polyline,
  Polygon,
  Circle,
  HeatMap,
  MultiPoint,
  Navigation,
  MapUtils,
}
