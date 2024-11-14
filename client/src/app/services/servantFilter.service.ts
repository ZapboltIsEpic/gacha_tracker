

// @Injectable({
//     providedIn: 'root'
//   })
//   export class ServantFilterService {
//     constructor() {}
  
//     filterServants(servants: Servant[], searchTerm: string, filterClassMap: any, filterRarityMap: any): Servant[] {
//       return servants.filter(servant => {
//         const { class: servantClass, rarity } = servant;
//         const classFilter = (filterClassMap["All"] && filterRarityMap[0]) || 
//                             (filterClassMap["All"] && filterRarityMap[rarity]) || 
//                             (filterClassMap[servantClass] && filterRarityMap[0]) ||
//                             (filterClassMap[servantClass] && filterRarityMap[rarity]);
        
//         const searchFilter = servant.name.toLowerCase().includes(searchTerm.toLowerCase());
  
//         return classFilter && searchFilter;
//       });
//     }
//   }