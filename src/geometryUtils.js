// Check if a point is inside a pyramid with hardcoded square base and apex
const isPointInPyramid = (point) => {
  // Hardcoded pyramid base (square)
  const base = [
        { x: -23, y: -19, z: 10 },  // v0 - bottom left
        { x: 23, y: -19, z: 10 },   // v1 - bottom right
        { x: 23, y: 19, z: 10 },    // v2 - top right
        { x: -23, y: 19, z: 10 }    // v3 - top left
    ];

  
  // Hardcoded apex
  const apex = { x: 0, y: 0, z: 48 };
  
  // Helper function to calculate the determinant of a 4x4 matrix
  function det4x4(m) {
      return m[0][0] * (
          m[1][1] * (m[2][2] * m[3][3] - m[2][3] * m[3][2]) -
          m[1][2] * (m[2][1] * m[3][3] - m[2][3] * m[3][1]) +
          m[1][3] * (m[2][1] * m[3][2] - m[2][2] * m[3][1])
      ) - m[0][1] * (
          m[1][0] * (m[2][2] * m[3][3] - m[2][3] * m[3][2]) -
          m[1][2] * (m[2][0] * m[3][3] - m[2][3] * m[3][0]) +
          m[1][3] * (m[2][0] * m[3][2] - m[2][2] * m[3][0])
      ) + m[0][2] * (
          m[1][0] * (m[2][1] * m[3][3] - m[2][3] * m[3][1]) -
          m[1][1] * (m[2][0] * m[3][3] - m[2][3] * m[3][0]) +
          m[1][3] * (m[2][0] * m[3][1] - m[2][1] * m[3][0])
      ) - m[0][3] * (
          m[1][0] * (m[2][1] * m[3][2] - m[2][2] * m[3][1]) -
          m[1][1] * (m[2][0] * m[3][2] - m[2][2] * m[3][0]) +
          m[1][2] * (m[2][0] * m[3][1] - m[2][1] * m[3][0])
      );
  }
  
  // Check if point is inside tetrahedron
  function isPointInTetrahedron(point, v0, v1, v2, v3) {
      // Calculate the volume of the main tetrahedron
      const mainMatrix = [
          [v0.x, v0.y, v0.z, 1],
          [v1.x, v1.y, v1.z, 1],
          [v2.x, v2.y, v2.z, 1],
          [v3.x, v3.y, v3.z, 1]
      ];
      const mainVolume = Math.abs(det4x4(mainMatrix));
      
      // Calculate volumes of 4 sub-tetrahedra
      const subVolumes = [];
      
      // Replace each vertex with the point
      const matrices = [
          [[point.x, point.y, point.z, 1], [v1.x, v1.y, v1.z, 1], [v2.x, v2.y, v2.z, 1], [v3.x, v3.y, v3.z, 1]],
          [[v0.x, v0.y, v0.z, 1], [point.x, point.y, point.z, 1], [v2.x, v2.y, v2.z, 1], [v3.x, v3.y, v3.z, 1]],
          [[v0.x, v0.y, v0.z, 1], [v1.x, v1.y, v1.z, 1], [point.x, point.y, point.z, 1], [v3.x, v3.y, v3.z, 1]],
          [[v0.x, v0.y, v0.z, 1], [v1.x, v1.y, v1.z, 1], [v2.x, v2.y, v2.z, 1], [point.x, point.y, point.z, 1]]
      ];
      
      matrices.forEach(matrix => {
          subVolumes.push(Math.abs(det4x4(matrix)));
      });
      
      // Sum of sub-volumes
      const totalSubVolume = subVolumes.reduce((sum, vol) => sum + vol, 0);
      
      // Point is inside if sum of sub-volumes equals main volume (within tolerance)
      const tolerance = 1e-10;
      return Math.abs(totalSubVolume - mainVolume) < tolerance;
  }
  
  // Split the pyramid into 2 tetrahedra and check if point is in either
  const [v0, v1, v2, v3] = base;
  
  // Tetrahedron 1: apex, v0, v1, v2
  const inTet1 = isPointInTetrahedron(point, apex, v0, v1, v2);
  
  // Tetrahedron 2: apex, v0, v2, v3
  const inTet2 = isPointInTetrahedron(point, apex, v0, v2, v3);
  
  return inTet1 || inTet2;
}


export { isPointInPyramid };