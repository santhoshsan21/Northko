// import React from "react";
// import { StyleSheet, View, ScrollView } from "react-native";
// import SkeletonPlaceholder from "react-native-skeleton-placeholder";
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import color from "../styles/color";

// function HomeScreenLoader() {
//     const categorys = [{}, {}, {}, {}]
//     const offers = [{}, {}, {}]
//     const frequent = [{}, {},]
//     return (
//         <ScrollView>
//             <SkeletonPlaceholder>
//                 <View style={styles2.full_view}>

//                     <View>
//                         <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:wp(5),paddingHorizontal:wp(5)}}>
//                             <View style={styles2.genxt} />
//                             <View style={{flexDirection:'row'}}>
//                                 <View style={styles2.bell} />
//                                 <View style={styles2.bell} />
//                             </View>
//                         </View>
//                         <View style={styles2.header_bottom}>
//                             {
//                                 categorys.map((item, index) => {
//                                     return (

//                                         <View key={index} style={styles2.item} >
//                                             <View style={styles2.item_image} />
//                                             <View style={styles2.img_txt} />
//                                         </View>
//                                     )
//                                 })
//                             }
//                         </View>

//                     </View>

//                     <View style={styles2.image_swipe} />


//                     <View style={[styles2.commonstyle, { justifyContent: "space-evenly", marginVertical: hp(2), marginHorizontal: wp(3), width: wp(100) }]}>
//                         {
//                             offers.map((item, index) => {
//                                 return (
//                                     <View key={index} style={styles2.offer_container} />
//                                 )
//                             })
//                         }

//                     </View>

//                     <View style={{ width: wp(100), marginVertical: wp(2), }}>
//                         <View style={[styles2.commonstyle, { justifyContent: "space-between", width: wp(92), paddingHorizontal: wp(1) }]}>
//                             <View style={{ width: wp(50), height: hp(3), borderRadius: wp(1), }} />
//                             <View style={{ width: wp(20), height: hp(3), borderRadius: wp(1), }} />
//                         </View>

//                         <View style={{ width: wp(100), marginVertical: wp(5), alignItems: "center", justifyContent: "center", alignSelf: "center", paddingHorizontal: wp(1) }}>
//                             <View style={{ justifyContent: "space-evenly", flexWrap: 'wrap', flexDirection: "row", width: wp(96) }}>
//                                 <View style={styles2.product_box} />
//                                 <View style={styles2.product_box} />
//                                 <View style={styles2.product_box} />
//                                 <View style={styles2.product_box} />

//                             </View>
//                         </View>
//                     </View>
//                 </View>
//             </SkeletonPlaceholder>
//         </ScrollView>
//     );
// };

// export const HomeProductBoxLoader = () => {
//     return (
//         <SkeletonPlaceholder>
//             <View style={{ width: wp(100), marginVertical: wp(5), alignItems: "center", justifyContent: "center", alignSelf: "center", paddingHorizontal: wp(1) }}>
//                 <View style={{ justifyContent: "space-evenly", flexWrap: 'wrap', flexDirection: "row", width: wp(96) }}>
//                     <View style={styles2.product_box} />
//                     <View style={styles2.product_box} />
//                     <View style={styles2.product_box} />
//                     <View style={styles2.product_box} />

//                 </View>
//             </View>
//         </SkeletonPlaceholder>
//     )
// }

// export const ReturnImplantsCreateLoader = () => {
//     const data = [{}, {}, {}, {}]
//     return (
//         <SkeletonPlaceholder>
//             <View style={{ width: wp(100), }}>
//                 {data.map((item, index) => {
//                     return (
//                         <View key={index} style={{ width: wp(95), alignSelf: "center", marginVertical: hp(1.6) }}>

//                             {index == 3 ? <View style={{ width: wp(30), height: hp(1.1), marginBottom: hp(2) }} /> : <></>}
//                             <View style={{ width: index == 3 ? wp(75) : wp(20), height: hp(1), marginBottom: hp(1) }} />
//                             <View style={{ width: wp(40), height: hp(1), marginBottom: hp(1) }} />
//                             <View style={{ width: wp(95), height: hp(0.5), }} />
//                         </View>
//                     )
//                 })}
//                 <View>
//                     <View style={{ marginVertical: hp(2), marginHorizontal: wp(5) }}>
//                         <View style={{ width: wp(25), height: hp(2), borderRadius: hp(1) }} />
//                         <View style={{ marginVertical: hp(2), flexDirection: "row", width: wp(50) }}>
//                             <View style={{ width: wp(20), flexDirection: "row", alignItems: "center", marginRight: wp(5) }}>
//                                 <View style={{ width: wp(6), height: wp(6), borderRadius: wp(100), marginRight: wp(1) }} />
//                                 <View style={{ width: wp(15), height: hp(2), borderRadius: hp(1) }} />

//                             </View>
//                             <View style={{ width: wp(20), flexDirection: "row", alignItems: "center", }}>
//                                 <View style={{ width: wp(6), height: wp(6), borderRadius: wp(100), marginRight: wp(1) }} />
//                                 <View style={{ width: wp(15), height: hp(2), borderRadius: hp(1) }} />

//                             </View>
//                             <View />
//                         </View>
//                     </View>


//                     <View style={{ width: wp(90), alignSelf: "center", height: hp(28), borderRadius: hp(1), borderWidth: wp(1), borderColor: color.placeholderGrey, }}>
//                         <View style={{ marginHorizontal: wp(5), marginVertical: hp(2) }}>
//                             <View style={{ width: wp(20), height: hp(2), borderRadius: hp(1), marginVertical: hp(1) }} />
//                             <View style={{ width: wp(35), height: hp(2), borderRadius: hp(1), marginVertical: hp(1.5) }} />
//                             <View style={{ width: wp(80), height: hp(0.5), alignSelf: "center" }} />

//                         </View>

//                         <View style={{ marginVertical: hp(2), alignItems: "center", alignSelf: "center" }}>
//                             <View style={{ flexDirection: "row", marginHorizontal: wp(5) }}>
//                                 <View style={{ width: wp(35), height: hp(1), borderRadius: wp(1), marginRight: wp(10) }} />
//                                 <View style={{ width: wp(35), height: hp(1), borderRadius: wp(1) }} />
//                             </View>
//                             <View style={{ flexDirection: "row", marginHorizontal: wp(5), marginVertical: hp(2) }}>
//                                 <View style={{ width: wp(35), height: hp(2), borderRadius: wp(1), marginRight: wp(10) }} />
//                                 <View style={{ width: wp(35), height: hp(2), borderRadius: wp(1) }} />
//                             </View>
//                             <View style={{ width: wp(80), height: hp(0.5), alignSelf: "center" }} />


//                         </View>
//                     </View>

//                     <View style={{ width: wp(15), height: hp(3), alignSelf: "flex-end", marginVertical: hp(2), borderRadius: hp(1), marginHorizontal: wp(7) }} />

//                 </View>


//             </View>

//         </SkeletonPlaceholder>
//     )
// }

// function CheckoutLoader() {
//     const categorys = [{}, {}, {}, {}]
//     const offers = [{}, {}, {}]
//     const frequent = [{}, {},]
//     return (
//         <ScrollView style={{ padding: wp(2) }}>
//             <SkeletonPlaceholder  >
//                 <View>
//                     {
//                         frequent.map((item, index) => {
//                             return (
//                                 <View key={index} style={[styles2.commonstyle, { width: wp(100), height: hp(12), width: wp(100), justifyContent: "center", marginHorizontal: wp(5), marginVertical: hp(1) }]}>
//                                     <View style={{ width: wp(25), height: wp(22), borderRadius: wp(3) }} />
//                                     <View style={{ width: wp(45), marginTop: wp(3) }}>
//                                         {categorys.map((item, index) => { return (<View key={index} style={styles2.product_details} />) })}
//                                         {/* <View style={styles2.product_details} />
//                                         <View style={styles2.product_details} />
//                                         <View style={styles2.product_details} />
//                                         <View style={styles2.product_details} /> */}
//                                     </View>
//                                     <View style={styles2.btn_product} />
//                                 </View>
//                             )
//                         })
//                     }
//                     <View style={styles2.border} />

//                     {
//                         frequent.map((item, index) => {
//                             return (
//                                 <View key={index} style={{ width: wp(100), marginVertical: hp(2), marginHorizontal: wp(3) }}>
//                                     <View style={{ width: wp(90), alignSelf: "center" }}>
//                                         <View style={{ width: wp(40), height: hp(3), borderRadius: hp(1) }} /></View>

//                                     <View style={{ width: wp(95), alignSelf: "center", flexDirection: "row", marginVertical: hp(3) }}>
//                                         <View style={{ width: wp(10), height: hp(6), borderRadius: hp(1) }} />
//                                         <View style={{ width: wp(50), marginLeft: wp(3), }}>
//                                             <View style={[styles2.shipping_address, { width: wp(25) }]} />
//                                             <View style={[styles2.shipping_address, { width: wp(40) }]} />
//                                             <View style={[styles2.shipping_address, { width: wp(40) }]} />
//                                         </View>
//                                         <View style={[styles2.btn_product, { marginLeft: wp(5) }]} />
//                                     </View>
//                                     <View style={{ width: wp(95), height: hp(0.5), alignSelf: "center", }} />


//                                 </View>

//                             )
//                         })
//                     }

//                     <View style={{ width: wp(90), height: hp(8), alignSelf: "center", borderRadius: wp(2), marginVertical: wp(3) }} />

//                     <View style={{ width: wp(90), alignSelf: "center", flexDirection: "row" }}>
//                         <View style={{ width: wp(60) }}>
//                             <View style={{ width: wp(40), height: hp(4), borderRadius: hp(1) }} />
//                         </View>
//                         <View style={{ width: wp(30), height: hp(4), borderRadius: hp(1) }} />
//                         <View />

//                     </View>

//                     <View style={{ width: wp(90), alignSelf: "center", borderRadius: wp(2), marginVertical: wp(5), flexDirection: "row" }} >
//                         <View style={{ width: wp(60), height: hp(8), borderRadius: hp(1) }} />
//                         <View style={{ width: wp(25), height: hp(8), borderRadius: hp(1), marginLeft: wp(5) }} />


//                     </View>



//                 </View>

//             </SkeletonPlaceholder>
//         </ScrollView>
//     );
// };

// function CartLoader() {
//     const categorys = [{}, {}, {}]
//     const frequent = [{}, {}, {}, {}]
//     return (
//         <ScrollView style={{ padding: wp(2) }}>
//             <SkeletonPlaceholder  >
//                 <View>
//                     {
//                         frequent.map((item, index) => {
//                             return (
//                                 <View key={index} style={[styles2.commonstyle, { width: wp(100), height: hp(12), width: wp(100), justifyContent: "center", marginHorizontal: wp(5), marginVertical: hp(1) }]}>
//                                     <View style={{ width: wp(25), height: wp(22), borderRadius: wp(3) }} />
//                                     <View style={{ width: wp(45), marginTop: wp(3) }}>
//                                         {categorys.map((item, index) => { return (<View key={index} style={styles2.product_details} />) })}
//                                     </View>
//                                     <View style={styles2.btn_product} />
//                                 </View>
//                             )
//                         })
//                     }
//                 </View>
//                 <View style={{ width: '100%', alignItems: 'flex-end', marginVertical: wp(3) }}>
//                     <View style={{ width: wp(50), padding: wp(2) }} />
//                     <View style={{ width: wp(50), padding: wp(2), marginVertical: wp(2) }} />
//                     <View style={{ width: wp(50), padding: wp(2) }} />
//                     <View style={{ width: wp(50), padding: wp(2), marginVertical: wp(2) }} />
//                     <View style={{ width: wp(50), padding: wp(2) }} />
//                 </View>
//             </SkeletonPlaceholder>
//         </ScrollView>
//     )
// }

// function MyOrdersLoader() {

//     const orders = [{}, {}, {}, {}, {}]
//     const t = [{}, {}, {},]

//     return (
//         <SkeletonPlaceholder >
//             <View style={{ width: wp(95), alignSelf: "center" }}>

//                 {orders.map((item, index) => {
//                     return (
//                         <View key={index}>
//                             <View style={{ width: wp(55), height: hp(3), borderRadius: wp(2), marginVertical: hp(2) }} />

//                             <View style={{ flexDirection: "row", width: wp(95), alignSelf: "center", marginVertical: hp(2) }}>
//                                 <View style={{ width: wp(60) }}>
//                                     {t.map((item, index) => {
//                                         return (
//                                             <View key={index} style={styles2.txt_line} />)
//                                     })}

//                                 </View>
//                                 <View style={styles2.item}>
//                                     <View style={[styles2.shipping_address, { width: wp(30), height: hp(5), borderRadius: wp(10) }]} />
//                                     <View style={[styles2.shipping_address, { width: wp(20), marginVertical: hp(2) }]} />
//                                 </View>
//                             </View>

//                             <View style={styles2.border} />
//                         </View>

//                     )
//                 })}


//             </View>

//         </SkeletonPlaceholder>
//     )

// };

// function RetrunImplantsLoader() {

//     const orders = [{}, {}, {}, {}, {}]

//     return (
//         <SkeletonPlaceholder >

//             <View style={{ width: wp(95), alignSelf: "center", }}>
//                 <View style={[styles2.commonstyle, { width: wp(95), marginHorizontal: wp(15), justifyContent: "flex-end", marginVertical: hp(1) }]}>
//                     <view style={{ width: wp(30), height: hp(6), borderRadius: wp(1), marginRight: wp(5) }} />
//                     <view style={{ width: wp(12), height: wp(12), borderRadius: wp(100), }} />
//                 </View>
//                 <View style={styles2.border} />


//                 {orders.map((item, index) => {
//                     return (
//                         <View key={index}>
//                             <View style={[styles2.commonstyle, { width: wp(95), marginVertical: hp(2), }]}>
//                                 <View style={{ width: wp(65) }}>
//                                     <View style={[styles2.shipping_address, { width: wp(40), marginBottom: hp(3) }]} />
//                                     <View style={[styles2.shipping_address, { width: wp(40), marginBottom: hp(3) }]} />
//                                     <View style={[styles2.shipping_address, { width: wp(40), marginBottom: hp(3) }]} />
//                                     <View style={{ flexDirection: "row", width: wp(50), alignItems: "center" }}>

//                                         <View style={{ width: wp(23), height: hp(2), marginBottom: hp(3), borderRadius: wp(5) }} />
//                                         <View style={{ width: wp(24), height: hp(5), marginBottom: hp(3), borderRadius: wp(10), marginLeft: wp(3) }} />
//                                     </View>

//                                 </View>
//                                 <View style={[styles2.item, { width: wp(30) }]}>
//                                     <View style={[styles2.shipping_address, { width: wp(20), height: hp(6), borderRadius: wp(10), marginTop: hp(10), marginBottom: hp(5) }]} />
//                                     <View style={[styles2.shipping_address, { width: wp(15), height: hp(3) }]} />
//                                 </View>
//                             </View>

//                             <View style={styles2.border} />
//                         </View>

//                     )
//                 })}


//             </View>

//         </SkeletonPlaceholder>
//     )

// }

// function CategoriesLoader() {
//     const loader = [{}, {}, {}, {}]
//     return (
//         <SkeletonPlaceholder>
//             <View>
//                 {
//                     loader.map((item, index) => {
//                         return (
//                             <View key={index}>
//                                 <View style={styles1.ThirdContainer}>

//                                     <View style={{ marginTop: wp(2), marginLeft: wp(1), width: wp(25), height: wp(20), borderRadius: wp(3) }} />

//                                     <View style={{ marginTop: wp(3), marginLeft: wp(5), width: wp(35), height: wp(20), flexDirection: 'column' }} >
//                                         <View style={{ width: wp(30), height: wp(2), borderWidth: wp(1), borderColor: color.placeholderGrey }} />
//                                         <View style={{ marginTop: wp(3), width: wp(30), height: wp(1), borderWidth: wp(1), borderColor: color.placeholderGrey }} />
//                                         <View style={{ marginTop: wp(3), width: wp(30), height: wp(1), borderWidth: wp(1), borderColor: color.placeholderGrey }} />
//                                         <View style={{ marginTop: wp(3), width: wp(30), height: wp(1), borderWidth: wp(1), borderColor: color.placeholderGrey }} />
//                                     </View>

//                                     <View style={{ marginTop: wp(2), marginLeft: wp(5), width: wp(22), height: wp(25) }} >
//                                         <View style={{ marginTop: wp(3), width: wp(20), height: wp(3), borderWidth: wp(1), borderColor: color.placeholderGrey }} />
//                                         <View style={{ marginTop: wp(5), width: wp(20), height: wp(5), borderWidth: wp(1), borderColor: color.placeholderGrey, borderRadius: wp(1) }} />
//                                     </View>

//                                 </View>

//                             </View>
//                         )
//                     })
//                 }

//             </View>
//         </SkeletonPlaceholder>
//     );
// };

// function MainCategoriesLoader() {
//     const categorys = [{}, {}, {}, {}, {}, {}, {}, {}]
//     return (
//         <ScrollView>
//             <SkeletonPlaceholder>
//                 <View>
//                     <View style={styles1.header_bottom}>
//                         {
//                             categorys.map((item, index) => {
//                                 return (
//                                     <View key={index} style={styles1.item} >
//                                         <View style={styles1.item_image} />
//                                         <View style={styles1.img_txt} />
//                                     </View>
//                                 )
//                             })
//                         }
//                     </View>
//                 </View>
//             </SkeletonPlaceholder>
//         </ScrollView>
//     );
// };

// function MyprofileLoader() {
//     return (
//         <ScrollView showsVerticalScrollIndicator={false}>
//             <SkeletonPlaceholder>
//                 <View>
//                     <View style={styles1.FirstContainer} />
//                     <View style={{ width: wp(90), flexDirection: 'row', alignSelf: 'center', marginVertical: wp(5) }}>
//                         <View style={{ width: wp(75), }}>
//                             <View style={[{ width: wp(50) }, styles1.Fullname]} />
//                             <View style={[{ width: wp(60) }, styles1.Fullname]} />
//                             <View style={[{ width: wp(50) }, styles1.Fullname]} />
//                         </View>
//                         <View style={styles1.Edit} />
//                     </View>
//                     <View style={styles1.Border} />
//                     <View style={{ width: wp(90), flexDirection: 'row', alignSelf: 'center', marginVertical: wp(5) }}>
//                         <View style={{ width: wp(75), }}>
//                             <View style={[{ width: wp(50) }, styles1.Clinicname]} />
//                             <View style={[{ width: wp(60) }, styles1.Clinicname]} />
//                             <View style={[{ width: wp(70) }, styles1.Clinicname]} />
//                             <View style={[{ width: wp(30) }, styles1.Clinicname]} />
//                             <View style={[{ width: wp(40) }, styles1.Clinicname]} />
//                             <View style={[{ width: wp(30) }, styles1.Clinicname]} />
//                             <View style={[{ width: wp(40) }, styles1.Clinicname]} />
//                         </View>
//                         <View style={styles1.Edit} />
//                     </View>
//                     <View style={styles1.Border} />
//                     <View style={{ width: wp(90), flexDirection: 'row', alignSelf: 'center', marginVertical: wp(5) }}>
//                         <View style={{ width: wp(75), }}>
//                             <View style={[{ width: wp(70) }, styles1.Dealername]} />
//                             <View style={[{ width: wp(70) }, styles1.Dealername]} />
//                             <View style={[{ width: wp(50) }, styles1.Dealername]} />
//                             <View style={[{ width: wp(90) }, styles1.Dealername]} />
//                             <View style={[{ width: wp(40) }, styles1.Dealername]} />
//                         </View>
//                     </View>
//                     <View style={styles1.Border} />
//                     <View style={styles1.FirstContainer} />
//                 </View>
//             </SkeletonPlaceholder>
//         </ScrollView>
//     );
// };

// function MyOfferLoader() {
//     const loader = [{}, {}]
//     return (
//         <ScrollView>
//             <SkeletonPlaceholder>
//                 <View>
//                     <View style={{ flexDirection: 'row', marginTop: wp(2) }}>
//                         <View style={{ width: wp(40), height: hp(5), marginLeft: wp(3), borderRadius: wp(1) }} />
//                         <View style={{ width: wp(50), height: hp(5), marginLeft: wp(3), borderRadius: wp(1) }} />
//                     </View>
//                     <View >
//                         {
//                             loader.map((item, index) => {
//                                 return (
//                                     <View key={index} style={styles1.Container}>
//                                         <View style={{ marginLeft: wp(3) }}>
//                                             <View style={{ marginTop: wp(5) }}>
//                                                 <View style={[{ width: wp(40) }, styles1.Discount]} />
//                                                 <View style={[{ width: wp(70) }, styles1.Discount]} />
//                                             </View>
//                                             <View style={{ marginTop: wp(5) }}>
//                                                 <View style={[{ width: wp(40) }, styles1.Discount]} />
//                                                 <View style={[{ width: wp(35) }, styles1.Discount]} />
//                                             </View>
//                                             <View style={[{ width: wp(30) }, styles1.Fullname]} />
//                                             <View style={[{ width: wp(65) }, styles1.Fullname]} />
//                                             <View style={{ width: wp(20), height: hp(3), marginTop: wp(5) }} />
//                                             <View style={[{ width: wp(30) }, styles1.Fullname]} />
//                                         </View>
//                                         <View style={{ width: wp(80), height: hp(6), alignSelf: 'center', marginVertical: hp(3), borderRadius: wp(2) }} />
//                                     </View>
//                                 )
//                             })
//                         }
//                     </View>
//                 </View>
//             </SkeletonPlaceholder>
//         </ScrollView>
//     );
// };

// function AddressLoader() {
//     var array = [{}, {}, {}]
//     return (
//         <ScrollView>
//             <SkeletonPlaceholder>
//                 <View style={{ width: wp(90), alignSelf: 'center', marginTop: wp(5), borderRadius: wp(3) }}>
//                     {array.map((item, index) => (
//                         <View key={index} style={{ borderWidth: 2, borderColor: '#f2f2f2', borderRadius: wp(2), padding: wp(3), marginBottom: wp(2) }}>
//                             <View style={{ width: wp(50), height: wp(1.5) }} />
//                             <View style={{ width: wp(60), height: wp(1.5), marginVertical: wp(2) }} />
//                             <View style={{ width: wp(30), height: wp(1.5) }} />
//                             <View style={{ flexDirection: 'row', width: wp(90), marginTop: wp(5) }}>
//                                 <View style={{ width: wp(60) }}>
//                                     <View style={{ width: wp(15), height: (20) }} />
//                                 </View>
//                                 <View style={{ width: wp(20) }}>
//                                     <View style={{ width: wp(15), height: (20) }} />
//                                 </View>
//                             </View>
//                         </View>
//                     ))}
//                 </View>
//             </SkeletonPlaceholder>
//         </ScrollView>
//     );
// };

// function OnDemandWebinarsLoader() {
//     return (
//         <SkeletonPlaceholder>
//             <View style={{ width: '100%', height: hp(30), marginBottom: wp(3), borderRadius: wp(2), alignSelf: 'center' }} />
//         </SkeletonPlaceholder>
//     )
// }

// export { HomeScreenLoader, CartLoader, CheckoutLoader, MyOrdersLoader, RetrunImplantsLoader, CategoriesLoader, MainCategoriesLoader, AddressLoader, MyOfferLoader, MyprofileLoader, OnDemandWebinarsLoader }

// const styles1 = StyleSheet.create({
//     FirstContainer: {
//         marginLeft: wp(3),
//         marginTop: hp(1),
//         height: wp(8),
//         borderRadius: wp(25),
//         borderWidth: wp(1),
//         borderColor: color.placeholderGrey
//     },
//     SecondContainer: {
//         marginLeft: wp(3),
//         marginTop: hp(1),
//         height: wp(10),
//         borderRadius: wp(5),
//         borderWidth: wp(1),
//         borderColor: color.placeholderGrey
//     },
//     ThirdContainer: {
//         flexDirection: 'row',
//         width: wp(96),
//         height: wp(25),
//         alignSelf: 'center',
//         marginTop: wp(3),
//         padding: wp(1),
//         margin: wp(1)
//     },
//     item_image: {
//         width: wp(30),
//         height: wp(30),
//         borderRadius: wp(3),
//         marginLeft: wp(2),
//         marginTop: wp(6),
//     },
//     header_bottom: {
//         flexDirection: "row",
//         width: wp(100),
//         flexWrap: 'wrap',
//     },
//     item: {
//         alignItems: "center",
//     },
//     img_txt: {
//         width: wp(15),
//         height: wp(2),
//         marginTop: wp(1),
//         borderRadius: wp(1),
//         alignItems: 'center',
//         marginLeft: wp(5)
//     },
//     FirstContainer: {
//         width: wp(90),
//         height: wp(15),
//         alignSelf: 'center',
//         marginTop: wp(5),
//         borderRadius: hp(1)
//     },
//     Fullname: {
//         height: hp(1),
//         marginTop: wp(5)
//     },
//     Edit: {
//         width: wp(12),
//         height: wp(6),
//         marginLeft: wp(5),
//         marginVertical: wp(4)
//     },
//     Border: {
//         width: wp(90),
//         alignSelf: 'center',
//         marginTop: wp(5)
//     },
//     Clinicname: {
//         height: hp(1),
//         marginTop: hp(1)
//     },
//     Dealername: {
//         height: hp(1),
//         marginTop: hp(1)
//     },
//     Fullname: {
//         height: hp(1),
//         marginTop: hp(1)
//     },
//     Container: {
//         width: wp(90),
//         alignSelf: 'center',
//         marginTop: hp(2),
//         borderRadius: wp(3),
//         borderWidth: wp(1),
//         borderColor: color.placeholderGrey
//     },
//     Fullname: {
//         height: hp(1),
//         marginTop: wp(5)
//     },
//     Discount: {
//         height: hp(1),
//         marginTop: wp(2)
//     }
// })
// const styles2 = StyleSheet.create({
//     header: { flexDirection: 'row', alignItems: "center", justifyContent: "center", marginTop: 15, },
//     genxt: { width: wp(25), height: wp(10), borderRadius: wp(1), },
//     search_product: { width: wp(50), height: wp(10), borderRadius: wp(1), marginLeft: wp(2), },
//     bell: { width: wp(12), height: wp(10), borderRadius: wp(1), marginLeft: wp(2), },
//     item_image: { width: wp(20), height: wp(20), borderRadius: wp(3) },
//     header_bottom: { marginTop: wp(5), alignItems: "center", flexDirection: "row", justifyContent: "space-evenly", },
//     item: { alignItems: "center", },
//     img_txt: { width: wp(12), height: wp(2), marginTop: wp(1), borderRadius: wp(1) },
//     image_swipe: { width: wp(100), height: hp(18), marginTop: wp(4), },
//     offer_img: { width: wp(25), height: wp(30), },
//     offer_container: { width: wp(27), height: hp(15), backgroundColor: '#ffffff', borderRadius: wp(2), },
//     product_box: { height: hp(30), width: wp(43), borderRadius: wp(5), marginBottom: hp(2) },
//     product_details: { width: wp(30), height: wp(3), borderRadius: wp(2), marginBottom: wp(2), marginLeft: wp(2) },
//     btn_product: { width: wp(22), height: wp(8), borderRadius: wp(2), },
//     shipping_address: { width: wp(50), height: hp(2), borderRadius: hp(2), marginBottom: hp(1) },
//     header: { flexDirection: 'row', alignItems: "center", justifyContent: "center", marginTop: 15, },
//     genxt: { width: wp(25), height: wp(10), borderRadius: wp(1), },
//     search_product: { width: wp(50), height: wp(10), borderRadius: wp(1), marginLeft: wp(2), },
//     bell: { width: wp(12), height: wp(10), borderRadius: wp(1), marginLeft: wp(2), },
//     item_image: { width: wp(20), height: wp(20), borderRadius: wp(3) },
//     header_bottom: { marginTop: wp(5), alignItems: "center", flexDirection: "row", justifyContent: "space-evenly", },
//     item: { alignItems: "center", },
//     img_txt: { width: wp(12), height: wp(2), marginTop: wp(1), borderRadius: wp(1) },
//     image_swipe: { width: wp(100), height: hp(18), marginTop: wp(4), },
//     offer_img: { width: wp(25), height: wp(30), },
//     offer_container: { width: wp(27), height: hp(15), backgroundColor: '#ffffff', borderRadius: wp(2), },
//     product_box: { height: hp(30), width: wp(43), borderRadius: wp(5), marginBottom: hp(2) },
//     border: { width: wp(95), height: hp(0.5), alignSelf: "center", marginTop: wp(2) },
//     commonstyle: { flexDirection: "row", alignItems: "center", alignSelf: "center" },
//     txt_line: { width: wp(50), height: hp(2), borderRadius: hp(2), marginBottom: hp(1), width: wp(40), marginBottom: hp(2) },

// })
