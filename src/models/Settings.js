
import {
  paramGroups,
  paramTypes,
  ParamUtils,
  valueTypes
} from '@/models/constants/params';

export class Settings {

  constructor() {

      function getDiscreteParams(paramTypeId) {
        return Object.keys(paramTypes)
          .filter(key => paramTypes[key].groupId ==  paramTypeId)
          .map(key => paramTypes[key])
      }

      this.params = [
      { id: paramTypes.detType.id,
        type: valueTypes.discrete,
        defaultValue: paramTypes.detType_sift.id,
        value: paramTypes.detType_sift.id,
        values: getDiscreteParams(paramTypes.detType.id)
      },
      { id: paramTypes.desType.id,
        type: valueTypes.discrete,
        defaultValue: paramTypes.desType_sift.id,
        value: paramTypes.desType_sift.id,
        values: getDiscreteParams(paramTypes.desType.id)
      },
      { id: paramTypes.matcherType.id,
        type: valueTypes.discrete,
        defaultValue: paramTypes.matcherType_auto.id,
        value: paramTypes.matcherType_auto.id,
        values: getDiscreteParams(paramTypes.matcherType.id)
      },
      { id: paramTypes.transformFinderType.id,
        type: valueTypes.discrete,
        defaultValue: paramTypes.transformFinderType_ransac.id,
        value: paramTypes.transformFinderType_ransac.id,
        values: getDiscreteParams(paramTypes.transformFinderType.id)
      },

      { id: paramTypes.compareDetTypes.id,
        type: valueTypes.multiple,
        defaultValue: [paramTypes.detType_sift.id, paramTypes.detType_orb.id, paramTypes.detType_akaze.id].toString(),
        value: [paramTypes.detType_sift.id, paramTypes.detType_orb.id, paramTypes.detType_akaze.id].toString(),
        values: getDiscreteParams(paramTypes.detType.id)
      },

      {
        id: paramTypes.compareImageType.id,
        type: valueTypes.discrete,
        defaultValue: paramTypes.imageTemplate.id,
        value: paramTypes.imageTemplate.id,
        values: getDiscreteParams(paramTypes.compareImageType.id)
      },

      { id: paramTypes.imageCap.id,
        type: valueTypes.rangeSquareRoot,
        defaultValue: 250000,
        value: 250000,
        range: { min: 10000, max: 9000000 }
      },
      { id: paramTypes.imageCapInput.id,
        type: valueTypes.rangeSquareRoot,
        defaultValue: 1000000,
        value: 1000000,
        range: { min: 10000, max: 16000000 }
      },

      { id: paramTypes.floodFillTolerance.id,
        type: valueTypes.range,
        defaultValue: 20,
        value: 20,
        range: { min: 0, max: 255 }
      },

      { id: paramTypes.alignSelectionOverlay.id,
        type: valueTypes.bool,
        defaultValue: 0,
        value: 0
      },

      { id: paramTypes.logInfoEnabled.id,
        type: valueTypes.bool,
        defaultValue: 0,
        value: 0
      },
      { id: paramTypes.logErrorEnabled.id,
        type: valueTypes.bool,
        defaultValue: 1,
        value: 1
      },
      { id: paramTypes.logAssertEnabled.id,
        type: valueTypes.bool,
        defaultValue: 1,
        value: 1
      },
      { id: paramTypes.logExternEnabled.id,
        type: valueTypes.bool,
        defaultValue: 0,
        value: 0
      },
    
      { id: paramTypes.sift_featuresN.id,
        type: valueTypes.number,
        value: 0,
        defaultValue: 0
      },
      { id: paramTypes.sift_octaveLayersN.id,
        type: valueTypes.number,
        value: 3,
        defaultValue: 3
      },
      { id: paramTypes.sift_contrastThresh.id,
        type: valueTypes.number,
        value: 0.04,
        defaultValue: 0.04
      },
      { id: paramTypes.sift_edgeThresh.id,
        type: valueTypes.number,
        value: 10,
        defaultValue: 10
      },
      { id: paramTypes.sift_sigma.id,
        type: valueTypes.number,
        value: 1.6,
        defaultValue: 1.6
      },

      { id: paramTypes.surf_hessianThresh.id,
        type: valueTypes.number,
        value: 100.0,
        defaultValue: 100.0
      },
      { id: paramTypes.surf_octavesN.id,
        type: valueTypes.number,
        value: 4,
        defaultValue: 4
      },
      { id: paramTypes.surf_octaveLayersN.id,
        type: valueTypes.number,
        value: 3,
        defaultValue: 3
      },
      { id: paramTypes.surf_extended.id,
        type: valueTypes.bool,
        value: 0,
        defaultValue: 0
      },

      { id: paramTypes.orb_featuresN.id,
        type: valueTypes.number,
        value: 500,
        defaultValue: 500
      },
      { id: paramTypes.orb_scale.id,
        type: valueTypes.number,
        value: 1.2,
        defaultValue: 1.2
      },
      { id: paramTypes.orb_levelsN.id,
        type: valueTypes.number,
        value: 8,
        defaultValue: 8
      },
      { id: paramTypes.orb_edgeThresh.id,
        type: valueTypes.number,
        value: 31.0,
        defaultValue: 31.0
      },
      { id: paramTypes.orb_patchSize.id,
        type: valueTypes.number,
        value: 31.0,
        defaultValue: 31.0
      },

      { id: paramTypes.brisk_thresh.id,
        type: valueTypes.number,
        value: 30.0,
        defaultValue: 30.0
      },
      { id: paramTypes.brisk_octavesN.id,
        type: valueTypes.number,
        value: 3,
        defaultValue: 3
      },
      { id: paramTypes.brisk_patternScale.id,
        type: valueTypes.number,
        value: 1.0,
        defaultValue: 1.0
      },

      { id: paramTypes.kaze_thresh.id,
        type: valueTypes.number,
        value: 0.001,
        defaultValue: 0.001
      },
      { id: paramTypes.kaze_octavesN.id,
        type: valueTypes.number,
        value: 4,
        defaultValue: 4
      },
      { id: paramTypes.kaze_octaveLayersN.id,
        type: valueTypes.number,
        value: 4,
        defaultValue: 4
      },

      { id: paramTypes.akaze_thresh.id,
        type: valueTypes.number,
        value: 0.001,
        defaultValue: 0.001
      },
      { id: paramTypes.akaze_octavesN.id,
        type: valueTypes.number,
        value: 4,
        defaultValue: 4
      },
      { id: paramTypes.akaze_octaveLayersN.id,
        type: valueTypes.number,
        value: 4,
        defaultValue: 4
      },
      
      {
        id: paramTypes.matchFilterSpreadAuto.id,
        type: valueTypes.bool,
        value: 1,
        defaultValue: 1
      },
      {
        id: paramTypes.matchFilterSpreadFactor.id,
        type: valueTypes.number,
        value: 2.2,
        defaultValue: 2.2
      },
      {
        id: paramTypes.matchFilterMinMatchesToRetain.id,
        type: valueTypes.number,
        value: 20,
        defaultValue: 20
      },
      {
        id: paramTypes.matchFilterMaxMatchesToRetain.id,
        type: valueTypes.number,
        value: 200,
        defaultValue: 200
      }
    ];
  }

  getParamDefaultValueById(id) {
    return this._getParamById(id).defaultValue;
  }

  getParamValueById(id) {
    return this._getParamById(id).value;
  }

  getParamValuesById(id) {
    const param = this._getParamById(id);
    this._throwIfNotMultiple(param);
    return this._valueToArray(param.value);
  }

  getParamDefaultValuesById(id) {
    const param = this._getParamById(id);
    this._throwIfNotMultiple(param);
    return this._valueToArray(param.defaultValue);
  }

  getParamValueNamesById(id) {
    const valueArr = this.getParamValuesById(id);
    return valueArr.map(value => ParamUtils.getParamName(value));
  }

  setParamValueById(id, value) {
    const param = this._getParamById(id);
    param.value = value;
  }

  getIdArr() {
    return this.params.map(param => param.id);
  }

  getIdValueArr() {
    return this.params.map(param => ({ id: param.id, value: param.value }));
  }
  getIdValueArrExcludingDefaults() {
    return this.params
      .filter(param => param.value != param.defaultValue)
      .map(param => {
        return { id: param.id, value: param.value }
      });
  }

  getIdValueDefaultArr() {
    return this.params.map(param => ({ id: param.id, value: param.value, defaultValue: param.defaultValue }));
  }

  setByIdValueArr(idValueArr) {
    idValueArr.forEach(idValue => {
      this.setParamValueById(idValue.id, idValue.value);
    });
  }

  equals(idValueArr) {
    if(idValueArr == null) {
      return !this.params || this.params.length == 0;
    }

    if(idValueArr.length != this.params.length) return false;
    for(let i = 0; i < idValueArr.length; ++i) {
      if(idValueArr[i].id != this.params[i].id) return false;
      if(idValueArr[i].value != this.params[i].value) return false;
    }

    return true;
  }

  getRelatingIdValue(id, value) {
    switch(id) {
      case paramTypes.detType.id: {
        switch(value) {
          case paramTypes.detType_sift.id: return { id: paramTypes.desType.id, value: paramTypes.desType_sift.id };
          case paramTypes.detType_surf.id: return { id: paramTypes.desType.id, value: paramTypes.desType_surf.id };
          case paramTypes.detType_orb.id: return { id: paramTypes.desType.id, value: paramTypes.desType_orb.id };
          case paramTypes.detType_brisk.id: return { id: paramTypes.desType.id, value: paramTypes.desType_brisk.id };
          case paramTypes.detType_kaze.id: return { id: paramTypes.desType.id, value: paramTypes.desType_kaze.id };
          case paramTypes.detType_akaze.id: return { id: paramTypes.desType.id, value: paramTypes.desType_akaze.id };
          default: return null;
        }
      }
      default: return null;
    }
  }

  // this is hacky... because of the name comparison
  getCurrentDetTypeGroupKey() {
    const param = this.params.find(param => param.id == paramTypes.detType.id);
    const paramTypeKey = Object.keys(paramTypes).find(key => paramTypes[key].id == param.value);
    const groupName = paramTypes[paramTypeKey].name;
    return Object.keys(paramGroups).find(key => paramGroups[key].name == groupName);
  }

  paramsByGroupKey(groupKey) {
    return Object.keys(paramTypes)
      .filter(key => paramTypes[key].groupId == paramGroups[groupKey].id)
      .map(key => this.params.find(param => param.id == paramTypes[key].id));
  }

  copyValuesTo(target) {
    // eslint-disable-next-line no-console
    console.assert(this.params.length == target.params.length);
    for(let i = 0; i < this.params.length; ++i) { 
      // eslint-disable-next-line no-console
      console.assert(this.params[i].id === target.params[i].id);
      if(target.params[i].value != this.params[i].value) {
        target.params[i].value = this.params[i].value;
      }
    }
  }

  _getParamById(id) {
    const param = this.params.find(param => param.id == id);
    if(!param) {
      throw new Error('No param with id ${id} exists');
    }
    return param;
  }

  _throwIfNotMultiple(param) {
    if(param.type != valueTypes.multiple) {
      throw new Error(`Param id/name ${param.id}/${param.name} is not capable`);
    }
  }
  _valueToArray(value) {
    if(!value) return [];
    
    return !isNaN(Number(value))
      ? [+value]
      : value.split(',').map(valStr => +valStr);
  }

}
